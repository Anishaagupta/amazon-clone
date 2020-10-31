import React from 'react';
import '../Checkout/Checkout.css';
import {Link} from "react-router-dom";

const Thankyou = () => {
    return (
        <div className="login">
        <Link to="/" >
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "logo"/>
        </Link>
            <div className="login_container">
                <h4>Thankyou For Shopping From Amazon</h4>
                <Link to="/"><button type="submit" className="btn" style={{marginTop: "30px"}}>Continue Shopping</button></Link>
            </div>
        </div>   
    )
}

export default Thankyou;
