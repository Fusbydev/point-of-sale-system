import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { auth } from '../firebase'; // Import the auth service from firebase.js
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'; // Import necessary Firebase functions
import { set } from "firebase/database";

function SideBar({ sidebarVisible, toggleSidebar }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [profileImage, setProfileImage] = useState("");

    const [hoveredItem, setHoveredItem] = useState(null); // Track hovered menu item

    console.log(sidebarVisible); // Debugging to confirm the value is passed

    const handleLogout = async () => {
        try {
          await signOut(auth); // Sign out from Firebase
          localStorage.removeItem('isAuthenticated'); // Clear the authentication status
          localStorage.removeItem('user'); // Clear the stored user data
          navigate('/'); // Redirect to the login page
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userFromForm = JSON.parse(localStorage.getItem("userFromForm"));
        console.log(user);
        console.log(userFromForm)
    
        if (user) {
            setUsername(user.displayName); // Correctly update the state
            setProfileImage(user.photoURL);
            console.log("Username:", user.displayName);
            console.log("Image:", user.photoURL);
        } else if(userFromForm) {
            setUsername(userFromForm.username); // Correctly update the state
        }
    }, []);
    // Empty dependency array ensures this runs only on mount

    return (
        <div className={`sidebar-container ${sidebarVisible ? "expanded" : "collapsed"}`}>
            <button onClick={toggleSidebar} className={`sidebar-toggle ${sidebarVisible ? "toggle-btn text-end" : "toggle-btn" }`}>
                <i className={`bi ${sidebarVisible ? "bi-chevron-left" : "bi-list"}`}></i>
            </button>
            <div className=" mb-2 text-center">
                <img
                    src={profileImage}
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
                    <a href="#dashboard">
                        <i className="bi bi-graph-up-arrow"></i>
                        {sidebarVisible && " Dashboard"}
                    </a>
                </li>
                <li className={`menu-item ${!sidebarVisible ? "center-icons" : ""}`}>
                    <a href="#transactions">
                        <i className="bi bi-cash-coin"></i>
                        {sidebarVisible && " Transactions"}
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
                    className="logout py-3"
                >
                    <i className="bi bi-box-arrow-right"></i>
                    {sidebarVisible && " Logout"}
                </button>
            </div>
        </div>
    );
}

export default SideBar;
