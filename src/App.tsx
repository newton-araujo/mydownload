import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Start from './screens/Start/Start';
import RenderButtom from './components/RenderButtom';
import Loading from './components/Loading';

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('Inicio');
  const [statusLoading, setStatusLoading] = useState<boolean>(false);

  const handleSelectScreen = (screen: string) => {
    setStatusLoading(true);

    setTimeout(() => {
      setCurrentScreen(screen);
      setStatusLoading(false);
    }, 1500);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Inicio':
        return <Start />;
      case 'Administrativo':
        return <RenderButtom nome='Administrativo' />;
      case 'MvSoul':
        return <RenderButtom nome='MvSoul' />;
      case 'Telefonia':
        return <RenderButtom nome='Telefonia' />;
      case 'Recursos Humano':
        return <RenderButtom nome='Recursos Humano' />;
      case 'Diretoria':
        return <RenderButtom nome='Diretoria' />;
      case 'Drives':
        return <RenderButtom nome='Drives' />;
      case 'Impressoras':
        return <RenderButtom nome='Impressoras' />;
      case 'Manutenção':
        return <RenderButtom nome='Manutenção' />;
      case 'Eng. Clinica':
        return <RenderButtom nome='Eng. Clinica' />;
      default:
        return <h1>Tela não encontrada</h1>; // melhor retornar algo no default
    }
  };

  return (


    <div className='contentMain'>
  
      <SideBar onSelectScreen={handleSelectScreen} />
      
      {statusLoading ? (
        <Loading />
      ) : (
        renderScreen()
      )}
    </div>
  );
}

export default App;
