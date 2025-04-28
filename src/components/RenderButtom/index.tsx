import React, { useState, useEffect } from 'react';
import './style.css';

const RenderButton = ({ nome }: { nome: string }) => {
  const [message, setMessage] = useState<string>('Carregando arquivos...');
  const [files, setFiles] = useState<string[]>([]); 
  const [folder, setFolder] = useState<string>(nome.toLowerCase()); // Mantendo o folder como o nome da pasta em lowercase

  const executarBat = (caminho: string): void => {
    if (window.electronAPI) {
      console.log(caminho);
      window.electronAPI.rodarBat(caminho);
    } else {
      console.log(caminho);
      console.error("Electron API não encontrada");
    }
  };

  useEffect(() => {
    setMessage('Carregando arquivos...');
    // Fazendo a requisição para pegar os arquivos da pasta específica
    fetch(`http://localhost:5000/api/files?folder=${folder}`)
      .then(response => response.json())
      .then(data => {
        if (data.files && data.files.length > 0) {
          setFiles(data.files);
          setMessage('Arquivos carregados:');
        } else {
          setMessage('Nenhum arquivo encontrado.');
        }
      })
      .catch(error => {
        console.error('Erro ao buscar arquivos:', error);
        setMessage('Erro ao buscar arquivos.');
      });
  }, [folder]); // Recarregar sempre que o folder mudar

  return (
    <div className="contentRenderButtom">
      <div className="contentTitle">
        <h1>{nome}</h1>
      </div>
      
      <div className="content_btn">
        <div className="bats">
          {files.map((file, index) => (
            <button key={index} onClick={() => executarBat(`C:\\Users\\newtonADM\\Documents\\instaladores\\${ folder }\\${file}`)}>
              {file}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderButton;
