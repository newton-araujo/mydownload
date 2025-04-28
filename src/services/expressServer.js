import express from 'express';
import cors from 'cors'; 
import path from 'path';
import fs from 'fs';

const app = express();
const port = 5000;

app.use(cors()); 

const basePastaArquivos = path.resolve('C:/Users/newtonADM/Documents/instaladores/');


app.get('/api/files', (req, res) => {
  const { folder } = req.query; 

  if (!folder) {
    return res.status(400).json({ message: 'Pasta não especificada.' });
  }

  const pastaArquivos = path.join(basePastaArquivos, folder.toString());

  fs.readdir(pastaArquivos, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao listar arquivos', error: err.message });
    }
    res.json({ files });
  });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
