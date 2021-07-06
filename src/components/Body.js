import img1 from '../../assets/img/chocoramo.png'
import ramoImg from '../../assets/img/ramo-logo.png'
import ramoImg2 from '../../assets/img/ramo-banner.png'
import ramoImg3 from '../../assets/img/ramo-escuela-01.png'
import ramoImg4 from '../../assets/img/heros.png'
import ramoImg5 from '../../assets/img/ramo-alimentando-suenos-01.png'
import ramoImg6 from '../../assets/img/ramo-donaciones-05.png'


const Body = () => {
    return (
        <div className = "body">
            <div className="containerBody" id="containerBody">
                <div className="title">
                    <h1>Familia Ramo</h1>
                </div>

                <div className="container">
                    <img src={img1} alt="" />
                    <div className="content-info">
                        <h1>-Hemos creado una plataforma pensada para la familia Ramo-. </h1>
                          
                    </div>
                </div>
                <div className="divider"></div>

                <div className="container2">
                    <div className="content-info">
                        <h1>¡Ahora puedes encontrar toda la información que necesites con tan solo un click!<span role="img" aria-label="mouse">🖲️</span></h1>
                          
                    </div>
                    <img src={ramoImg} alt="" />

                </div>
            </div>
            <div className="TheGrid" id="TheGrid">
                <div className="container">
                    <div className="containerTitle">
                        <h1>Comunidad de aprendizaje</h1>
                    </div>
                    <div className="containerImage">
                       
                    <img src={ramoImg3} alt="imgRamo" id="learning"/>

                    </div>

                </div>
                <div className="container">
                    <div className="containerTitle">
                        <h1>Catálogo de productos</h1>
                    </div>
                    <div className="containerImage">
                    <img src={ramoImg2} alt="imgRamo" />
                    </div>
                </div>
                <div className="container">
                    <div className="containerTitle">
                        <h1>Reconocimientos</h1>
                    </div>
                    <div className="containerImage">
                        <img src={ramoImg4} alt="imgRamo" />

                    </div>
                </div>
                <div className="container">
                    <div className="containerTitle">
                        <h1>Alimentando sueños</h1>
                    </div>
                    <div className="containerImage" id="contentImageD" >
                        <img src={ramoImg5} alt="imgRamo" id="dreams"/>

                    </div>
                </div>
               
              
            </div>
            
            <div className="contenedorObjetivos">
                {/* <div className="containerText">
                    <h1>Nuestros objetivos</h1>
                </div> */}
                <div className="objetivo" id="objetivos">
                    
                    <div className="containerText2">
                        <h1>💻</h1><h1>Acceder sin limitaciones geográficas</h1>
                    </div>
                    <div className="containerText2">
                        <h1>⌚</h1><h1>Agilzar procesos administrativos</h1>
                    </div>
                    <div className="containerText2">
                        <h1>📕</h1><h1>Fomentar el aprendizaje</h1>
                    </div>
                    <div className="containerText2">
                        <h1>🍪</h1><h1>Promover el comercio electrónico</h1>
                    </div>
                    <div className="containerText2">
                        <h1>👨‍👩‍👧</h1><h1>Reconocer a nuestros colaboradores</h1>
                    </div>
                </div>
                <div className="objetivo2">
                    <img src={ramoImg6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Body
