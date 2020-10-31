import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import '../Login/login.css';

const Address = () => {
    
    const history = useHistory();
    const [name, setName] = useState('');
    const [num,  setNum] = useState('');
    const [add1, setAdd1] = useState('');
    const [add2, setAdd2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    const confirm = (e) =>{
        e.preventDefault();
        if(!name || !num || !add1 || !city || !state){
            return alert("Please fill all the details");
        }else{
            return history.push("/payment")
        }

    }
    return (
        <div className="login">
        <Link to="/" >
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "logo"/>
        </Link>
            <div className="login_container">
                <h1 style={{textAlign:"center"}}>Your Address</h1>
                <form>
                    <h5>Full Name</h5>
                    <input placeholder="Your Full Name" required value={name} onChange={e => setName(e.target.value)} type="text" />
                    <h5>Contact Number</h5>
                    <input placeholder="Your Contact Number" required value={num} onChange={e => setNum(e.target.value)} type="text" />
                    <h5>Address 1</h5>
                    <input placeholder="Your Address 1" required value={add1} onChange={e => setAdd1(e.target.value)} type="text" />
                    <h5>Address 2</h5>
                    <input placeholder="Your Address 2" required value={add2} onChange={e => setAdd2(e.target.value)} type="text" />
                    <h5>City</h5>
                    <input placeholder="Your City" required value={city} onChange={e => setCity(e.target.value)} type="text" />
                    <h5>State</h5>
                    <input placeholder="Your State" required value={state} onChange={e => setState(e.target.value)} type="text" />
                    
                </form>
                 <button onClick={confirm} type="submit" className="btn">Place Order</button>
                
            </div>
        </div>
    )
}

export default Address;
