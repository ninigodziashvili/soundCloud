
import React, { useState } from "react";

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <style>{`
 .sidebar {
  height: 90em;
  left: 0;
  background: linear-gradient(to top, rgb(19, 10, 8), rgb(28, 16, 13), rgb(90, 51, 41));
  padding-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: width 0.3s;
  overflow-x: hidden;
  z-index: 999;
  width: 0;
  overflow: hidden;
}

.sidebar.open {
  width: 250px;
  overflow: visible;
}

.sidebar.closed {
  width: 0;
  overflow: hidden;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar a {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  transition: 0.3s;
}

.icono-lista {
padding: 7px;
}

.sidebar .icono-lista:hover {
  background: linear-gradient(to left, rgb(20, 10, 7), rgb(65,28,22,255), rgb(218,51,17,255));
}

.sidebar .icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.sidebar .sub-menu {
  padding-left: 40px;
  display: none;
}

.sidebar .sub-menu.open {
  display: block;
}
  .sidebar .btn-close {
  display: none;
  position: absolute;
  color: #fff;
  right: 20px;
  cursor: pointer;
}

/* Media Query */

@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    width: 0 !important;
    overflow: hidden !important;
    position: fixed; /* დაემატოს */
  }

  .sidebar.open {
    width: 250px !important;
    overflow: visible !important;
  }

  .toggle-btn {
    display: block !important;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1000;
  }

  .main-content,
  .main-content.with-sidebar {
    margin-left: 0 !important;
  }
}

            `}</style>
            <div>
                <a className="toggle-btn" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                    <i className="fas fa-bars"></i>
                </a>

                {/* Sidebar */}
                <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
                    <div className="main-logo">
                        <img
                            src="https://images.seeklogo.com/logo-png/15/1/soundcloud-logo-png_seeklogo-157945.png"
                            alt="Logo"
                            style={{ cursor: 'pointer' }}
                            onClick={() => window.location.reload()}
                        />

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
        </>
    )
}

export default Sidebar