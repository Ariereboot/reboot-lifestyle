import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const URL = 'http://localhost:8080/carrusel-energia-portrait';
const OUT = path.join(__dirname, 'carrusel-energia-portrait-slides');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);

const n = await page.$$eval('.slide', els => els.length);
console.log(`found ${n} energia slides — exporting`);
for (let i = 0; i < n; i++) {
  const handle = await page.$$('.slide').then(els => els[i]);
  const file = path.join(OUT, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await handle.screenshot({ path: file });
  console.log(`  → ${path.basename(file)}`);
}
await browser.close();
console.log('done');
