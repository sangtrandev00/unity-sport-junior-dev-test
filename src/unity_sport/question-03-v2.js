import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { exec } from 'child_process';

// Get the directory name of the current module
console.log("import.meta", import.meta.url);
const __filename = fileURLToPath(import.meta.url);
console.log("filenam", __filename);
const __dirname = dirname(__filename);
console.log("dirname", __dirname);

// Use the absolute path to data.json
const dataPath = `${__dirname}/data.json`;

const data = fs.readFileSync(dataPath, 'utf-8');
// console.log("data", data);
const minifiedData = JSON.stringify(JSON.parse(data)); // Loại bỏ khoảng trắng
fs.writeFileSync('data.min.json', minifiedData);

// Compress the file using shell command
const zipFileName = 'data.min.zip';
exec(`zip ${zipFileName} data.min.json`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error compressing file: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});