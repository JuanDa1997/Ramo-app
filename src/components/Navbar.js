import React from 'react'
import ramoImg from '../../assets/img/ramo-logo.png'

const Navbar = ({handleLogout}) => {
    
    const openDropList =()=>{
        // console.log(`sdsdsdsdsd ${handleLogout}`)
        let show = document.getElementById('list')
        
        if (show.style.display === "none") {
            show.style.display = "block";
        } else {
            show.style.display = "none";
        }
        
    }

    return (
         
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                {/* <a className="navbar-brand"  href="#"><img src={ramoImg} alt="Image" /></a> */}
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#containerBody">Caracteristicas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#TheGrid">Beneficios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#objetivos">Objetivos</a>
                    </li>
                </ul>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={openDropList}></button>
                    <div className="dropdown-menu" id="list" style={{style:"none"}}>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={handleLogout} >Cerrar sesión</a>
                    </div>
                </div>
            </div>
       
        </nav>
    
    )
}

export default Navbar;