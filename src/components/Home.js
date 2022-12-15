import { faker } from '@faker-js/faker'
import React, { useContext } from 'react'
import { Cart } from './Context/Context'
import SingleProduct from './SingleProduct'

const Home = () => {
   let {state:{products},dispatch} =useContext(Cart)
  return (
   <div className="home">
    
    <div className="list">
    {products.map(elem=><SingleProduct key={faker.datatype.uuid()} elem={elem} /> )}
    </div>
   </div>
  )
}

export default Home