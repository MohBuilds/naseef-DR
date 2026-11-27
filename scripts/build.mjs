import { cp, lstat, readFile, realpath, rm, writeFile } from 'node:fs/promises';
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

// Netlify supplies the production origin, including custom domains.
// Preview builds use their own origin when available.
const deploymentUrl = process.env.CONTEXT === 'production'
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL || process.env.URL;
if (deploymentUrl) {
  const url = new URL(deploymentUrl);
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new Error('Deployment URL must use HTTP or HTTPS');
  }
  const htmlPath = path.join(output, 'index.html');
  let html = await readFile(htmlPath, 'utf8');
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url.origin}/$2`);
  html = html.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${url.origin}/assets/images/outreach/health-awareness-group.webp$2`);
  await writeFile(htmlPath, html, 'utf8');
}
console.log('Built website in dist/');
