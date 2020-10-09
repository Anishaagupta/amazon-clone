import React from 'react';
import { useStateValue } from '../../StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [dispatch] = useStateValue();

    const removeFromCart = () => {
           dispatch({
               type: "REMOVE_FROM_CART",
               id:id
           });
    };
    return (
        <div className="checkout_product">
            <img className="checkoutProduct_image" src={image} alt="product"/>
            <div className="checkoutP_info">
                <p className="checkoutP_title">{title}</p>
                <p className="checkoutP_price">
                   <b>&#8377;</b>
                   <strong>{price}</strong>
                </p>
                <div className="checkoutP_rating">
                    {Array(rating).fill().map((_, i)=>(<span>⭐</span>))}
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
