import React, { useState } from "react";
import "./App.css";

function App() {
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
    <>
      {/* Toggle Button */}
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

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "with-sidebar" : ""}`}>
        <h1>Main Content Area</h1>
        <p>This is where your main content will be displayed.</p>
      </div>
    </>
  );
}

export default App;
