import React from 'react';
import './Product.css';
import {useStateValue} from '../../StateProvider';

const Product = ({id,title,price,rating,image}) => {
    const [{cart}, dispatch] = useStateValue();
    const addToCart = () =>{
            dispatch({
                type: "ADD_TO_CART",
                item:{ id,
                title,image,price,rating}
            })
    };
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <b>&#8377;</b>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {
            Array(rating).fill().map((_)=>(<span>⭐</span>))
            }
        </div>

        </div>
        <img src={image} alt="product_image"/>
        <button onClick={addToCart}>Add To Cart</button>
            
        </div>
    )
}

export default Product;