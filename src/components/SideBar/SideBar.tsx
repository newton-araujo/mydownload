import './style.css'
import logo from '../../../public/easydown.png'
import { useState } from 'react'

function SideBar () {

    const itemsMenu: string[] = ['Inicio','Administrativo', 'MvSoul', 'Telefonia','Recursos Humano','Diretoria','Drives','Impressoras','Manutenção','Eng. Clinica']

    const [stateBtn, setStateBtn] = useState<string>('start')
        

    switch (stateBtn) {
        case 'Inicio':
            console.log("Tela main")
            break;
        
        case 'Administrativo':
            console.log("tela Administrativo")
            
            break;
        default:
            break;
    }


    return (
        <div className="containerMain">
            
            <div className="imgLogo">
                <img src={logo} alt="logo easy download" />
            </div>

            <div className='containerMenu'>
                {itemsMenu.map((item, index) => {
                    return <button key={index} className='btns' onClick={() => setStateBtn(item)}>{item}</button>
                })}
            </div>   

        </div>
    )
}

export default SideBar
