import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const Data = multer({ storage });

app.post('/files', Data.any('files'), (req, res) => {
  if (res.status(200)) {
    console.log('Your file has been uploaded successfully');
    console.log(req.files);
    res.json({ message: 'Successfully uploaded files' });
    res.end();
  }
});

app.listen(8000, () => {
  console.log('Server is running');
});
