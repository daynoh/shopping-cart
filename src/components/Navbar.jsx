import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../utils/Auth'
const Navbar = () => {
    const auth = useAuth()
  return (
    <nav className='primaryNav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to ='/profile'>Profile</NavLink>
        {/* Setting a protect route that only shows up when user is not logged in */}
        {
            !auth.user &&(
                <NavLink to='/Login'>Login</NavLink>
            )
        }
    </nav>
  )
}

export default Navbar
