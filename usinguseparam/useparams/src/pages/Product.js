import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const params = useParams()
  console.log(params);
  return (
    <div className='products card'>
Product Filters : {params.category}    </div>
  )
}

export default Product