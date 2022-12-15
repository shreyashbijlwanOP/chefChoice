import React from 'react'
import { useCartContext } from '../Context/Context'
import Product from '../Shared/Product'


const BestSeller = () => {
    
let {state:{products}}= useCartContext()
  return (
    <div className="bestseller-section" style={{ backgroundColor: "whitesmoke" }}>
    <div className="bestSeller-title my-3">
      <h2 className="fw-bold text-dark text-center">Best Seller</h2>
    </div>
    <div className="container d-flex justify-content-around flex-wrap">
        {products.filter(prod=>prod.rating>3 ).map(prod=> <Product key={prod.id} prods={prod} /> )}
    </div>
  </div>
  )
}

export default BestSeller