import React from 'react';
import {Link, useHistory} from "react-router-dom";
import '../Login/login.css';

const Payment = () => {

    const history = useHistory();
   
    const order = (e) =>{
        e.preventDefault();
        alert("Your order has been placed.")
        return history.push("/thankyou");
    }

    return (
        <div className="login">
        <Link to="/" >
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "logo"/>
        </Link>
            <div className="login_container">
                <h1 style={{textAlign:"center"}}>Payment Mode</h1>
                <form>
                        <small className="subtotal_gift">
                           <input type="radio"/> &nbsp; &nbsp; &nbsp;<b>UPI/PAYTM</b>
                        </small>
                        <small className="subtotal_gift">
                           <input type="radio"/> &nbsp; &nbsp; &nbsp;<b>CREDIT/DEBIT CARD</b>
                        </small>
                        <small className="subtotal_gift">
                           <input type="radio"/> &nbsp; &nbsp; &nbsp;<b>NET BANKING</b>
                        </small>
                        <small className="subtotal_gift">
                           <input type="radio"/> &nbsp; &nbsp; &nbsp;<b>CASH ON DELIVERY</b>
                        </small>
                    
                    <button type="submit" className="btn" onClick={order}>Confirm Order</button>
                </form>       
            </div>
        </div>
    )
}

export default Payment;
