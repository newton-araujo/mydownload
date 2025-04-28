import './style.css'
import logo from '../../../public/easydown.png'



function Loading() {
    return (

        <div className='containerLoading'>
            
            <div className="contentLoading">

                <div className="imgLogo">
                    <img src= {logo} alt="" />
                </div>

                <div className="pointLoading">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
                <div className="subTitle">
                    <h5>Carregando...</h5>
                </div>
            </div>

        </div>

    )
}


export default Loading;