
import React, { useState } from "react";
function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
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
                       <a href="" className="child">Inicio</a>
                       <a href="" className="child">Géneros</a>
                       <a href="" className="child">Álbumes</a>
                       <a href="" className="child">Cantantes</a>
                    </li>

                    <li className="parent">
                        <a href="#">
                            <i className="fas fa-file-alt icon"></i> Library
                        </a>
                       <a href="" className="child">Favoritas</a>
                       <a href="" className="child">Popular</a>
                       <a href="" className="child">Mi lista</a>
                    </li>

                    <li
                        className="parent"
                        onClick={() => toggleSubMenu(0)}
                        style={{ cursor: "pointer" }}
                    >
                        <a href="#!">
                            <i className="fas fa-comments icon"></i> Comments
                        </a>
                        <ul className={`sub-menu ${openSubMenus[0] ? "open" : ""}`}>
                            <li>
                                <a href="#">Pending</a>
                            </li>
                            <li>
                                <a href="#">Approved</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar