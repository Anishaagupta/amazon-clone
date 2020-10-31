import React from 'react';
import './Checkout.css';
import {useStateValue} from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import {Link} from "react-router-dom";
const Checkout = () => {
      // eslint-disable-next-line
    const [{cart}] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
        <img src="https://i.ibb.co/TM1zzNh/d.png" className="checkout_ad" 
          alt="add"/>
           {cart?.length === 0 ? (
              <div className="text">
              <h2>Your Cart Is Empty.</h2>
              <h3>Fill it with more items. To shop click on "Add To Cart" below the item.</h3>
              <h3>Happy Shopping <span role="img" aria-label="smiley">🤗</span></h3>
              <div style={{display:"flex", justifyContent:"center"}}><h5 style={{marginTop:"3px"}}>Click Here</h5><Link to="/"><h3> Go Back</h3></Link></div>
              </div>
           ):(
            <div>
            <h2 className="checkout_title">Your Products In Your Cart</h2>
            {cart.map(item => (
                <CheckoutProduct
                    id = {item.id}
                    title= {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}
                />
            ))}
            </div>
           )}
        </div>
        {cart.length > 0 && (
            <div className="checkbox-right">
                <Subtotal/>
            </div>
        )}
        </div>
    )
}

export default Checkout;
