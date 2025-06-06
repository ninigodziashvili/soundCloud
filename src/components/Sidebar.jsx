
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
                <a className="btn-close" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                    <i className="fas fa-close"></i>
                </a>

                <ul>
                    <li className="parent">
                        <a href="#">
                            <i className="fas fa-tachometer-alt icon"></i> Dashboard
                        </a>
                    </li>

                    <li className="parent">
                        <a href="#">
                            <i className="fas fa-file-alt icon"></i> Posts
                        </a>
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