import React, {useState} from 'react'
import logo from './assets/amazon.png'
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {auth} from "./firebase"; 


export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault(); //stops refresh
        //do login logic here 
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => console.log(e.message));
    };
    const register = event => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push("/");
        })
    };

   
    return (
        <div className="login">
        <div className="login-logo">
             <Link to="/">
                <img className="header-logo" src={logo}></img>
            </Link>
        </div>
        <div className="login-form">
        <h1> Sign In</h1>
            <form class="form">
                <h5> Email </h5>
                <br></br>
                <input value={email} type="email" onChange={event => setEmail(event.target.value.toString().trim())}/>
                <h5 className="btn"> Password</h5>
                <br></br>
                <input value={password} type="password" onChange={event => setPassword(event.target.value.toString().trim())}/>
                <button onClick={login} type="submit" className="sign-btn"> Sign In </button>
            </form>
            <p class="notice"> By signing in you agree to Amazon's Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice</p>
        <button onClick={register} class="btn"> Create Your Amazon Account</button>
        </div>
     </div>
    )
}
