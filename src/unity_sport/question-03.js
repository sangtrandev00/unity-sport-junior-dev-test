import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use the absolute path to data.json
const dataPath = `${__dirname}/data.json`;

const data = fs.readFileSync(dataPath, 'utf-8');
console.log("data", data);
const minifiedData = JSON.stringify(JSON.parse(data)); // Loại bỏ khoảng trắng
fs.writeFileSync('data.min.json', minifiedData);

const dataCompress = fs.readFileSync('data.min.json'); // Đọc file đã minify
zlib.gzip(dataCompress, (err, compressedData) => {
  if (err) throw err;
  fs.writeFileSync('data.min.json.gz', compressedData); // Lưu file nén
});