

import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillDelete } from 'react-icons/ai'
import {  useNavigate } from "react-router-dom";
import { useCartContext } from "../../Context/Context";

function NavCart({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let {state:{cart},dispatch} =  useCartContext()
  let navigate = useNavigate();
  return (
    <div className="nav-login">
      <Button variant="light" onClick={handleShow} className="me-2 d-flex gap-2">
      <img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" />
      {cart.length>0? <sup> <Badge bg="danger">{cart.length}</Badge></sup> : "cart"  }
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Order Summary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundImage:"url('https://www.licious.in/img/rebranding/user-login-new.jpg')"}}>
      {!(cart.length>0)?<>
        <div className="card py-4 text-center h3">Cart is Empty </div>
      </> :<>
       <Button style={{width:"100%"}} variant='danger' onClick={()=>navigate("/cart")} >Checkout To Proceed</Button>
        {
          cart.map(prod=>(
            <span className="cartitem rounded my-2 px-2 py-3" key={prod.id}>
              <img src={prod.image} alt={prod.name} style={{width:"50px",height:"50px",borderRadius:"50px",objectFit:"cover"}} />
              <div className="cartItemDetails mx-3 flex-grow-1">
                <div>{prod.name}</div>
                <span className="fw-bold">INR: {prod.price.split(".")[0]}</span>
              </div>
              <AiFillDelete  fontSize={20} style={{cursor:"pointer"}}  onClick={()=>dispatch({type:"removeToCart",payload:prod})} />
            </span>
          ))
        }
      </> }
  </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavCart;