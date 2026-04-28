// Render each .slide of carrusel-antojos.html to a 1080x1080 PNG using headless Chrome (via Playwright auto-install).
// Usage:  npx -y playwright@1.49.1 install chromium  (one-time)
//         node export-antojos-slides.js
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL = 'http://localhost:8080/carrusel-antojos';
const OUT = path.join(__dirname, 'carrusel-antojos-slides');

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1200, height: 1200 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

const slideCount = await page.$$eval('.slide', els => els.length);
console.log(`found ${slideCount} slides — exporting`);

for (let i = 0; i < slideCount; i++) {
  // Hide the variant tag chip if present (only Variante B has it)
  await page.evaluate(() => {
    const tag = document.querySelector('.variant-tag');
    if (tag) tag.style.display = 'none';
  });
  const handle = await page.$$('.slide').then(els => els[i]);
  const file = path.join(OUT, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await handle.screenshot({ path: file, omitBackground: false });
  console.log(`  → ${path.basename(file)}`);
}

await browser.close();
console.log('done');
