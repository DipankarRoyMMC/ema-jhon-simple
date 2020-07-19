import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
 
const Product = (props) => {
    // console.log(props.product);

    const { name, img, price, seller, stock,} = (props.product);
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className= "product-details">
                <h3>{name}</h3>
                <p><small>By: {seller}</small></p>
                <div className="item-description">
                    <div>
                        <h4>${price}</h4>
                        <p>Only {stock} left in stock -order soon</p>
                        <button onClick={()=> props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> to cart</button>                       
                        
                    </div>
                    <div>
                        <h4>Feature</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;