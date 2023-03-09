import React from 'react'
import {useParams} from 'react-router-dom'
const ProductDetails = () => {
    const params = useParams()
    const productId = params.ProductId
  return (
    <div>
      Details about {productId}
    </div>
  )
}

export default ProductDetails
