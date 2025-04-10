import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out")
        navigate('/login');
      }
    })
  },[])
  return (
    <div>
       <ToastContainer theme='dark'/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
