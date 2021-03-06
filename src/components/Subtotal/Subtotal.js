import React from 'react';
import {Link} from 'react-router-dom';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../../StateProvider";
import { getCartTotal } from '../../reducer/reducer';

const Subtotal = () => {
    const [{cart}] = useStateValue();
    return (
        <div className="subtotal">
             <CurrencyFormat
               renderText = {(value) => (
                   <div>
                       <p>Total Amount ({cart.length} items) : <strong>{`${value}`}</strong></p>
                       <small className="subtotal_gift">
                           <input type="checkBox"/> &nbsp;This Order Contains a gift.
                       </small>
                   </div>
               )}
               decimalScale = {2}
               value ={getCartTotal(cart)}
               displayType = {"text"}
               thousandSeparator = {true}
               prefix={"Rs."}
             />
            <Link to ="/address"><button className="btn" >Proceed To Checkout</button></Link>
        </div>
    )
}

export default Subtotal;
