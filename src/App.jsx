import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { AuthProvider } from './utils/Auth'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Homepage from './components/Homepage'
import { RequireAuth } from './utils/RequireAuth'
import Profile from './components/Profile'
import Products from './components/Products'
import New from './components/New'
import Featured from './components/Featured'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <AuthProvider>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path = 'Login' element ={<Login/>}></Route>

        <Route path = 'profile' element = {<RequireAuth><Profile></Profile></RequireAuth>}></Route>
        <Route path = 'products' element = {<Products/>}>
          <Route index element = {<Featured></Featured>}/>
          <Route path = 'new' element ={<New/>}/>
          <Route path = 'featured' element={<Featured></Featured>}/>
        </Route>
        
      </Routes>
     

    </AuthProvider>
    
  )
}

export default App
