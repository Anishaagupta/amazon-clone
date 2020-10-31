import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import '../Login/login.css';
import {auth} from '../../utils/firebase';

const SignUp = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const register = (e) =>{
        e.preventDefault();
        if(!email || !password){
            alert("Please provide all the details");
            return
        }if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Please Provide Valid Email Id")
            return 
        }else{
            auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            alert("Welcome to the Amazon Market")
            return history.push("/");
        }).catch((e) => alert(e.message));
        
        }
        
    }
    return (
        <div className="login">
        <Link to="/" >
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "logo"/>
        </Link>
            <div className="login_container">
                <h1 style={{textAlign:"center"}}>Sign Up</h1>
                <form>
                    <h5>E-mail</h5>
                    <input placeholder="Type Your Email" required value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input placeholder="Type Your Password" required value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={register} type="submit" className="btn">Sign Up</button>
                </form>
                {/* <p>By signing in you agree to Amazon's terms and conditions of Use & Sale. 
                Please see our Privacy Policy, our cookies and interest-based Ads Notice.</p> */}
               <Link to ="/login"> <button className="r_btn">Already Have An Account ?</button></Link>
            </div>
        </div>
    )
}

export default SignUp;
