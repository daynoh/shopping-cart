import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/Auth'
const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        auth.logout()
        navigate('/')
    }
  return (
    <div>
        <div>
            welcome {auth.user}
        </div>
        <button onClick = {handleLogout}>Logout</button>
      
    </div>
  )
}

export default Profile
