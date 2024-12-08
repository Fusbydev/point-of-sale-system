import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ProductCard from "../components/ProductCards";
import "./products.css";
import "./homepage.css";

function Products() {
    const [sidebarVisible, setSidebarVisible] = useState(true); // Sidebar visible initially

    const products = [
        {
            productName: "Legion Laptop",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "19.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Acer Laptop",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "29.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Asus Laptop",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "39.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Iphone 13",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "19.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Iphone 14",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "29.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Iphone 15",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "39.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Ipad Pro",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "19.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Ipad Air",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "29.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            productName: "Ipad Mini",
            productDescription: "Lorem ipsum dolor sit amet.",
            productPrice: "39.99",
            productImage: "https://images.unsplash.com/photo-1602492815000-5fc7e8a3c0e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        // ... (more products)
    ];

    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    return (
        <>
            <div className="homepage-container d-flex">
                <div className={`sidebar-cont ${sidebarVisible ? "visible" : "hidden"}`}>
                    <SideBar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                </div>
                <div className={`row product-container ${sidebarVisible ? "" : "full-width coll"}`}>
                    <h1>Aikamers POS</h1>
                    {/* put a searchbar using bootstrap */}
                    <div className="row mb-0">
                        <div className="col-12">
                            <form action="">
                                <div className="row align-items-center">
                                    <div className="col-md-8 col-12 ">
                                        <div className="input-group w-100">
                                            <input
                                                type="text"
                                                placeholder="Search for a product..."
                                                className="form-control h-50"
                                                aria-label="Search"
                                            />
                                            <button type="submit" className="btn btn-primary h-50 search">
                                                <i className="bi bi-search"></i> Search
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="justify-content-between">
                                            <div className="dropdown">
                                            <button
                                                className="btn btn-primary dropdown-toggle ddown"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Categories
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        dropdown is based on the users products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        dropdown is based on the users products
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            {products.map((product, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    <ProductCard
                                        productName={product.productName}
                                        productDescription={product.productDescription}
                                        productPrice={product.productPrice}
                                        productImage={product.productImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
