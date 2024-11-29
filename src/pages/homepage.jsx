import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCards";
import "./homepage.css";

function Homepage() {
    const [sidebarVisible, setSidebarVisible] = useState(true); // Sidebar visible initially

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    return (
        <>
            <div className="homepage-container d-flex">
            <div className={`sidebar-cont ${sidebarVisible ? "visible" : "hidden"}`}>
                <SideBar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            </div>
                <div className={`row product-container ${sidebarVisible ? "" : "full-width coll"}`}>
                    <div className="col-12">
                        <h1>this is my homepage</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
