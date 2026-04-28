import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 1200 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto('http://localhost:8080/quote-antojos', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
const handle = await page.$('.slide');
const file = path.join(__dirname, 'carrusel-antojos-slides', 'quote-antojos.png');
await handle.screenshot({ path: file });
console.log('→', file);
await browser.close();
