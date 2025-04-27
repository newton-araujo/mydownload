import './style.css'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faLock, faFolderOpen, faRocket, faAtom} from '@fortawesome/free-solid-svg-icons';


function Start() {
    

    return (
        <div className="containerStart">

            <motion.div className="title" initial={{scale:0}} animate={{scale:1}}>
                <h1>Facilidade e Controle nas Suas Mãos: Instale Scripts com um Clique</h1>
            </motion.div>

            <div className="content">
                <h4>Chega de perder tempo procurando arquivos ou executando comandos manualmente! Com a nova aplicação easy install, você tem uma ferramenta feita para simplificar suas tarefas e deixar seu trabalho ainda mais ágil.</h4>
            </div>

            <div className="contentDest">

                <motion.div 
                    className="contentIcon"
                    whileHover={{
                        scale:[null,1.1,1.1],
                        transition: {
                            duration:0.5,
                            times:[0, 0.6,1],
                            ease:["easeInOut","easeOut"]
                        }
                    }}
                    
                    transition={{
                        duration:0.3,
                        ease:"easeOut"
                    }}
                
                >
                    <FontAwesomeIcon icon={faComputer} className='desk'/>
                    <div className="description">
                        <h2>Desktop otimizado:</h2>
                        <h4>Sem depender de navegadores ou sistemas externos. Tudo acontece de forma local, rápida e confiável.</h4>
                    </div>
                </motion.div>

                <motion.div 
                        className="contentIcon"
                        whileHover={{
                            scale:[null,1.1,1.1],
                            transition: {
                                duration:0.5,
                                times:[0, 0.6,1],
                                ease:["easeInOut","easeOut"]
                            }
                        }}
                        
                        transition={{
                            duration:0.3,
                            ease:"easeOut"
                        }}
                
                >
                    <FontAwesomeIcon icon={faRocket} className='desk'/>
                    <div className="description">
                        <h2>Agilidade nas execuções:</h2>
                        <h4>Com apenas um clique, o analista realiza instalações sem precisar buscar arquivos manualmente.</h4>
                    </div>
                </motion.div>

                <motion.div 
                    className="contentIcon"
                    whileHover={{
                        scale:[null,1.1,1.1],
                        transition: {
                            duration:0.5,
                            times:[0, 0.6,1],
                            ease:["easeInOut","easeOut"]
                        }
                    }}
                    
                    transition={{
                        duration:0.3,
                        ease:"easeOut"
                    }}
                >
                    <FontAwesomeIcon icon={faLock} className='desk'/>
                    <div className="description">
                        <h2>Mais segurança, menos erros:</h2>
                        <h4>Processos padronizados reduzem falhas humanas e aumentam a confiança nas operações.</h4>
                    </div>
                </motion.div>

                <motion.div 
                    className="contentIcon"
                    whileHover={{
                        scale:[null,1.1,1.1],
                        transition: {
                            duration:0.5,
                            times:[0, 0.6,1],
                            ease:["easeInOut","easeOut"]
                        }
                    }}
                    
                    transition={{
                        duration:0.3,
                        ease:"easeOut"
                    }}    
                >
                    <FontAwesomeIcon icon={faFolderOpen} className='desk'/>
                    <div className="description">
                        <h2>Centralização e controle: </h2>
                        <h4>Todos os scripts ficam organizados na aplicação, facilitando o acesso e a gestão.</h4>
                    </div>
                </motion.div>


                <motion.div 
                    className="contentIcon"
                    whileHover={{
                        scale:[null,1.1,1.1],
                        transition: {
                            duration:0.5,
                            times:[0, 0.6,1],
                            ease:["easeInOut","easeOut"]
                        }
                    }}
                    
                    transition={{
                        duration:0.3,
                        ease:"easeOut"
                    }}
                >
                    <FontAwesomeIcon icon={faAtom} className='desk'/>
                    <div className="description">
                        <h2>Praticidade no dia a dia:</h2>
                        <h4>A interface foi pensada para facilitar o trabalho do analista, mesmo em operações repetitivas.</h4>
                    </div>
                </motion.div>


            </div>

        </div>
    )
}

export default Start