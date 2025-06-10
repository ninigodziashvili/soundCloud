
import React, { useState } from "react";


function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            <a className="toggle-btn" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                <i className="fas fa-bars"></i>
            </a>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
                <div className="main-logo">
                    <img src="https://images.seeklogo.com/logo-png/15/1/soundcloud-logo-png_seeklogo-157945.png" alt="" />
                    <div className="perfile-datos">
                        <p>Hi</p>
                        <h3>Nino Godziashvili</h3>
                    </div>
                </div>

                <ul>
                    <li className="parent">
                        <a href="#">
                            <i className="fas fa-tachometer-alt icon"></i> Menu
                        </a>
                        <div className="icono-lista">
                            <img src={require('../assets/icons/Vector.png')} alt="" />
                            <a href="" className="child">Inicio</a>
                        </div>

                        <div className="icono-lista">
                            <img src={require('../assets/icons/Union.png')} alt="" />
                            <a href="" className="child">Géneros</a>
                        </div>

                        <div className="icono-lista">
                            <img src={require('../assets/icons/Album.png')} alt="" />
                            <a href="" className="child">Álbumes</a>
                        </div>

                        <div className="icono-lista">
                            <img src={require('../assets/icons/Artist.png')} alt="" />
                            <a href="" className="child">Cantantes</a>
                        </div>
                    </li>

                    <li className="parent">
                        <a href="#">
                            <i className="fas fa-file-alt icon"></i> Library
                        </a>
                        <div className="icono-lista">
                            <img src={require('../assets/icons/Favorite.png')} alt="" />
                            <a href="" className="child">Favoritas</a>
                        </div>

                        <div className="icono-lista">
                            <img src={require('../assets/icons/Popular.png')} alt="" />
                            <a href="" className="child">Popular</a>
                        </div>

                        <div className="icono-lista">
                            <img src={require('../assets/icons/PlayList.png')} alt="" />
                            <a href="" className="child">Mi lista</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar