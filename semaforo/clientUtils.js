export function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function verdictLabel(v) {
  return { green: 'SE PUEDE', yellow: 'CON CAMBIO', red: 'MEJOR NO' }[v] || '';
}

export function verdictColor(v) {
  return { green: '#22c55e', yellow: '#facc15', red: '#ef4444' }[v] || '#999';
}

export function verdictIcon(v) {
  return { green: '🟢', yellow: '🟡', red: '🔴' }[v] || '';
}

export function renderResult(data) {
  if (data.error === 'no_menu_detected') {
    return `<div class="result-error">
      <h2>No pude leer el menú</h2>
      <p>${escapeHtml(data.message || 'Prueba con otra foto más nítida.')}</p>
    </div>`;
  }

  const { summary, items, notes } = data;
  const summaryHtml = `
    <div class="result-summary">
      <p class="result-summary__total">Analicé <strong>${summary.total}</strong> platos</p>
      <ul class="result-summary__breakdown">
        <li><span class="dot" style="background:#22c55e"></span>${summary.green} verdes</li>
        <li><span class="dot" style="background:#facc15"></span>${summary.yellow} amarillos</li>
        <li><span class="dot" style="background:#ef4444"></span>${summary.red} rojos</li>
      </ul>
    </div>
  `;

  const itemsHtml = items
    .map(
      (item) => `
        <li class="item item--${item.verdict}" style="border-left-color:${verdictColor(item.verdict)}">
          <div class="item__head">
            <span class="item__icon" aria-hidden="true">${verdictIcon(item.verdict)}</span>
            <span class="item__name">${escapeHtml(item.name)}</span>
            <span class="item__label" style="color:${verdictColor(item.verdict)}">${verdictLabel(item.verdict)}</span>
          </div>
          <p class="item__reason">${escapeHtml(item.reason)}</p>
          ${item.substitution ? `<p class="item__sub"><strong>Sustitución:</strong> ${escapeHtml(item.substitution)}</p>` : ''}
        </li>
      `
    )
    .join('');

  const notesHtml = notes ? `<p class="result-notes">${escapeHtml(notes)}</p>` : '';

  return `${summaryHtml}<ul class="result-items">${itemsHtml}</ul>${notesHtml}`;
}

// Resize and compress an image File to max 1600px long side, JPEG 85%.
// Returns { base64: string (no data: prefix), mediaType: string }.
export async function compressImage(file) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const img = await new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.onerror = reject;
    i.src = dataUrl;
  });

  const maxSide = 1600;
  let { width, height } = img;
  if (width > maxSide || height > maxSide) {
    const scale = Math.min(maxSide / width, maxSide / height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.85);
  const base64 = jpegDataUrl.split(',')[1];
  return { base64, mediaType: 'image/jpeg' };
}
