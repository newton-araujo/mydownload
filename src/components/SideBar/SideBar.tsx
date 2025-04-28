import './style.css';
import logo from '../../../public/easydown.png';


interface SideBarProps {
  onSelectScreen: (screen: string) => void;
}

function SideBar({ onSelectScreen }: SideBarProps) {  
  const itemsMenu: string[] = ['Inicio', 'Administrativo', 'MvSoul', 'Telefonia', 'Recursos Humano', 'Diretoria', 'Drives', 'Impressoras', 'Manutenção', 'Eng. Clinica'];

  return (
    <div className="containerMain">
      <div className="imgLogo">
        <img src={logo} alt="logo easy download" />
      </div>

      <div className='containerMenu'>
        {itemsMenu.map((item, index) => (
          <button key={index} className='btns' onClick={() => onSelectScreen(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

