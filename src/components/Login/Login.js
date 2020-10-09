import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './login.css';
import {auth} from '../../utils/firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
          history.push("/");
        }).catch((e) => alert(e.message));

    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            history.push("/");
        }).catch((e) => alert(e.message));
        
    }
    return (
        <div className="login">
        <Link to="/" >
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = "logo"/>
        </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input placecholder="Type Your Email" required value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input placecholder="Type Your Password" required value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type="submit" className="btn">Sign In</button>
                </form>
                <p>By signing in you agree to Amazon's terms and conditions of Use & Sale. 
                Please see our Privacy Policy, our cookies and interest-based Ads Notice.</p>
                <button onClick={register} className="r_btn">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
