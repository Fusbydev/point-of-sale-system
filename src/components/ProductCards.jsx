import React from "react";
import './pcard.css';

function ProductCard({ productName, productDescription, productPrice, productImage }) {
    return (
        <div className="pcard">
            <div className="pcard__content text-center">
                <img src="https://placehold.co/200x150" alt="product" />
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <p>${productPrice}</p>
                <button className="">Add to Transaction</button>
            </div>
        </div>
    );
}

export default ProductCard;
