import { readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VALID_EXTENSIONS = ['png', 'gif'];

function fileProps(file) {
  const id = file.split('.')[0];
  const name = `icon${id}`;
  const importLine = `import ${name} from './${file}'`;
  const exportLine = `"${id}": ${name}`;

  return {
    importLine,
    exportLine,
  };
}

function createIndex(folderName, exportName) {
  const imagesDir = path.resolve(__dirname, folderName);
  const files = readdirSync(imagesDir).filter((img) => {
    const ext = img.split('.')[1].toLowerCase();
    return VALID_EXTENSIONS.includes(ext);
  });

  const filesProps = files.map(fileProps);

  const importLines = filesProps.map((f) => f.importLine).join(';\n');
  const exportLines = filesProps.map((f) => f.exportLine).join(',\n  ');

  const indexContent = `${importLines}\n\nexport const ${exportName} = {\n${exportLines}\n}`;

  writeFileSync(`${imagesDir}/index.ts`, indexContent);
}

createIndex('mvp_icons', 'mvpIcons');
createIndex('mvp_icons_animated', 'mvpIconsAnimated');
createIndex('mvp_maps', 'mvpMaps');
