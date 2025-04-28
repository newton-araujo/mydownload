import './sytle.css'

function Main() {
    
    const executarBat = (caminho: string) => {
        window.electronAPI.rodarBat(caminho);
      };
    
    
    return (

        <>
            <div className="screen_main">

                <h1>TESTE</h1>


                
                <div className="content_btn">

                    <h4 className='sub-title'>Program teste</h4>

                    <button onClick={() => executarBat("C:\\Users\\newtonADM\\Documents\\instaladores\\app.bat")}>
                            INSTALL
                    </button>

                </div>

             

            </div>
        </>
    )
}


export default Main