import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
let count = 0;
for (const match of html.matchAll(/\b(?:href|src|poster|data-image)="([^"]+)"/g)) {
  const value = match[1];
  if (/^(?:[a-z]+:|#)/i.test(value)) continue;
  const isGalleryImage = match[0].startsWith('data-image');
  const target = path.resolve(root, isGalleryImage ? 'assets/' + value : value);
  if (!target.startsWith(root)) throw new Error('Asset path escapes public/: ' + value);
  await access(target);
  count++;
}
console.log(`Verified ${count} local website references, including gallery images.`);
const css = await readFile(path.join(root, 'css/style.css'), 'utf8');
for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
  await access(path.resolve(root, 'css', match[1]));
}
const script = await readFile(path.join(root, 'js/script.js'), 'utf8');
const photos = [...script.matchAll(/path: '([^']+)'/g)];
for (const match of photos) await access(path.join(root, 'assets', match[1]));
console.log(`Verified font resources and ${photos.length} gallery photograph paths.`);
