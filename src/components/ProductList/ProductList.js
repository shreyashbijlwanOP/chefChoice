import React from 'react'
import { useParams } from 'react-router-dom'
import { useCartContext } from '../Context/Context'
import Product from '../Shared/Product'


const ProductList = () => {
    let param = useParams()
let {state:{products}}= useCartContext()
  return (
    <div className="bestseller-section" style={{ backgroundColor: "whitesmoke" }}>
    <div className="bestSeller-title my-3">
      <h2 className="fw-bold text-dark text-center h2">Category : {param.id.toUpperCase()}</h2>
    </div>
    <div className="container d-flex justify-content-around flex-wrap">
        {products.filter(prod=>prod.category===param.id ).map(prod=> <Product key={prod.id} prods={prod} /> )}
    </div>
  </div>
  )
}
export default ProductList