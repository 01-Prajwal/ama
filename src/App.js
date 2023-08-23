import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import { auth } from "../src/firebase";
import {useStateValue} from '../src/StateProvider'



function App() {

  const [{},dispatch]=useStateValue();

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('THE USER IS:',authUser);
        
        if(authUser){
              dispatch({
                type:'SET_USER',
                user:authUser
              })
        }else{
            dispatch({
              type:'SET_USER',
              user:null
            })
        }
      })
  },[])
  return (
      <Router>
        <div className="app">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path ="/login" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
    )
}

export default App

