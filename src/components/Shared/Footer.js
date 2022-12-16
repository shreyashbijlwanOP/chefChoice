
import React from 'react'

const Footer = (props) => {
   let {fixed} = props
  return (
  <div className={`container-fluid d-flex align-items-center justify-content-center text-white flex-column ${fixed && fixed}`} style={{backgroundColor:"#d21243",height:"80px"}}>
    <small>Made with 🤍</small>
    <div className="lead my-2">Developed by : Shreyash Bijlwan Single Handed </div>
  </div>
  )
}

export default Footer