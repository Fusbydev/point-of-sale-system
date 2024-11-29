import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { Link } from "react-router-dom";

function SideBar({ sidebarVisible, toggleSidebar }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const [hoveredItem, setHoveredItem] = useState(null); // Track hovered menu item

    console.log(sidebarVisible); // Debugging to confirm the value is passed

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername(""); // Clear username from state
        navigate("/");
    };

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername); // Correctly update the state
        }
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <div className={`sidebar-container ${sidebarVisible ? "expanded" : "collapsed"}`}>
            <button onClick={toggleSidebar} className="toggle-btn">
                <i className={`bi ${sidebarVisible ? "bi-chevron-left" : "bi-list"}`}></i>
            </button>
            <div className=" mb-2 text-center">
                <img
                    src="src/assets/profile/jetpack.jpg"
                    alt="Profile"
                    className={`mx-auto ${sidebarVisible ? "profile-image" : "profile-image-collapsed"}`}
                />
                {sidebarVisible && <p className="mt-2 username">{username}</p>}
            </div>
            <ul>
            <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <Link to="/home">
                        <i className="bi bi-house-door-fill"></i>
                        {sidebarVisible && " Home"}
                    </Link>
                </li>
                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <Link to="/products">
                        <i className="bi bi-bag-fill"></i>
                        {sidebarVisible && " Products"}
                    </Link>
                </li>

                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <a href="#inventory">
                        <i className="bi bi-ui-checks"></i>
                        {sidebarVisible && " Inventory Track"}
                    </a>
                </li>
                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <a href="#transactions">
                        <i className="bi bi-cash-stack"></i>
                        {sidebarVisible && " Transactions"}
                    </a>
                </li>
                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <a href="#income">
                        <i className="bi bi-cash-coin"></i>
                        {sidebarVisible && " Income Tracker"}
                    </a>
                </li>
                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <a href="#settings">
                        <i className="bi bi-gear-fill"></i>
                        {sidebarVisible && " Settings"}
                    </a>
                </li>
            </ul>

            <hr />
            <div className="footer">
                <button
                    style={{ color: "white", textDecoration: "none" }}
                    onClick={handleLogout}
                    className="logout"
                >
                    <i className="bi bi-box-arrow-right"></i>
                    {sidebarVisible && " Logout"}
                </button>
            </div>
        </div>
    );
}

export default SideBar;
