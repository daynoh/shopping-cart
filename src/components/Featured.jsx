import React, {useState} from 'react'
import planets from './Products.json'
const Featured = () => {
    const [isClicked,setIsClicked] = useState([false])
    const [clickedProduct, setClickedProduct] = useState('')
    const planetList = planets.planets.map(planet =>
    <div className= 'products' onClick={()=>productClickhandler(planet)} key= {planet.name}>
      <div className="name">{planet.name}</div>
      <div>{planet.price}</div>
      </div>)
        
    
    const productClickhandler =(planet)=>
    {
      setIsClicked(true)
      setClickedProduct(planet.name)
    }
    const something = planets.planets.map(planet =><h2 onClick={()=>productClickhandler(planet)}>{planet.name}</h2>)
  return (
    <div>
      {isClicked && <h1>This is the clicked product{clickedProduct}</h1>}
      {console.log(planetList)}
      {planetList}
    </div>
  )
}

export default Featured
