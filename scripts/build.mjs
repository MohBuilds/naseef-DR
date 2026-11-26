import { cp, lstat, realpath, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
// Only clear this project's generated directory, never a link or external path.
if (path.dirname(output) !== path.resolve(root) || path.basename(output) !== 'dist') {
  throw new Error('Unexpected build output path');
}
const existing = await lstat(output).catch(error => {
  if (error.code !== 'ENOENT') throw error;
  return null;
});
if (existing) {
  if (existing.isSymbolicLink() || await realpath(output) !== output) {
    throw new Error('Refusing to replace redirected build output');
  }
  await rm(output, { recursive: true });
}
await cp(path.join(root, 'public'), output, { recursive: true });
console.log('Built website in dist/');
