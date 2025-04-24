import './style.css'
import logo from '../../../public/easydown.png'

function SideBar () {

    const itemsMenu: string[] = ['Brownsers', 'Comunicação', 'Banco de Dados']

    return (
        <div className="containerMain">
            
            <div className="imgLogo">
                <img src={logo} alt="logo easy download" />
            </div>

            <div className='containerMenu'>
                {itemsMenu.map((item, index) => {
                    return <button key={index} className='btns'>{item}</button>
                })}
            </div>   

        </div>
    )
}

export default SideBar
