import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.split('.')[1].toLowerCase() === 'json');

for (const file of files) {
  const jsonPath = path.resolve(__dirname, file);
  const jsonFile = fs.readFileSync(jsonPath, 'utf8');
  const jsonData = JSON.parse(jsonFile);

  const updatedJson = jsonData.filter((mvp) =>
    mvp.spawn.some((spawn) => spawn.respawnTime > 5000)
  );

  fs.writeFileSync(jsonPath, JSON.stringify(updatedJson));
}
