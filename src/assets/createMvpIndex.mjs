import { readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const iconsDir = path.resolve(__dirname, 'mvp_icons');

const files = readdirSync(iconsDir).filter((img) => img.includes('png'));

const item = (file) => `"${file.split('.png')[0]}": require("./${file}")`;

const ex = files.map(item).join(',\n  ');

const res = `export const mvpIcons = {
  ${ex}
}`;

writeFileSync(`${iconsDir}/index.ts`, res);
