

import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=async (e)=>{
    setError(false)
    e.preventDefault()
    try{
      const res=await axios.post('/auth/register',{
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    }
    catch(err){
      setError(true)
    }
  }


  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>

        <label >Username</label>
        <input type="text" 
               placeholder='Enter your username' 
               className='registerInput'
               onChange={e=>setUsername(e.target.value)}
         />

        <label >Email</label>
        <input type="text" 
               placeholder='Enter your email' 
               className='registerInput' 
               onChange={e=>setEmail(e.target.value)}
        />

        <label >Password</label>
        <input type="password" 
               placeholder='enter your password...' 
               className='registerInput' 
               onChange={e=>setPassword(e.target.value)}      
        />

        <button className="registerButton" type='submit'>Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {/* <span style={{color:'red',marginTop:'10px'}}>Something went wrong.....</span> */}
    </div>
  )
}

export default Register