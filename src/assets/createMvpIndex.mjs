import { readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createIndex(folderName, exportName) {
  const imagesDir = path.resolve(__dirname, folderName);
  const files = readdirSync(imagesDir).filter((img) => img.includes('png'));

  const item = (file) => `"${file.split('.png')[0]}": require("./${file}")`;

  const ex = files.map(item).join(',\n  ');

  const res = `export const ${exportName} = {
  ${ex}
}`;

  writeFileSync(`${imagesDir}/index.ts`, res);
}

createIndex('mvp_icons', 'mvpIcons');
createIndex('mvp_maps', 'mvpMaps');
