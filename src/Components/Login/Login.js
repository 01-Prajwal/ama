import React, { useState } from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";




function Login() {
    const navigate =useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn=(e)=>{
            e.preventDefault();
            //some fancy firebase login shiit
           
            auth.signInWithEmailAndPassword(email,password)
                .then(auth=>{
                    navigate('/')
                })
                .catch(error => alert(error.message))
    }

    const register=(e)=>{
        e.preventDefault();

        //some famce firebase stuff
        
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate('/')
                }
                
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
        <Link to="/">
            <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login_container">
            <h1>Sign-In</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className='login_sigInButton' onClick={signIn} type='submit'>Sign In</button>
                <p>
                    By signing-in you agree to AMAON FAKE CLONE Conditions of Use & Sale.Please se our Privacy Notice ,our Cookies Notice  and Our Interest Based Ads Notice.
                </p>
                <button className='login_registerButton' onClick={register}>Create Your Account</button>
            </form>
        </div>
        </div>
    )
}

export default Login
