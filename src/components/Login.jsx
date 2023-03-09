import React,{useState} from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import {useAuth} from '../utils/Auth'

const Login = () => {
    // Create a user state
  
    const [user, setUser] = useState('')
    // call the login fxn from auth context
    const auth = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    // if the user was in a previous location in a page when they 
    // login they should be returned to that page
    const redirectpath = location.state?.path || '/'

    const handleLogin = ()=>{
        auth.login(user)

        navigate(redirectpath,{replace:true})
    }
  return (
    <div>
      <label htmlFor="">
        Username:{' '}
        <input type="text"  onChange={(e) =>setUser(e.target.value)}/>
      </label>
      <button onClick = {handleLogin}>Login</button>
    </div>
  )
}

export default Login
