import React from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useCartContext } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CartPage = () => {
  let {
    state: { cart },
    dispatch,
  } = useCartContext();
  let navigate = useNavigate();
  const notify = () =>
    toast.success("Your Order has been placed Successfully", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className="container-fluid">
      <div className="row mb-3 sticky-top ">
        <div className="col py-2" style={{ backgroundColor: "#d21243" }}>
          <div className="title">
            <span className="flex-grow-1">
              Total Price : ₹{" "}
              {cart.reduce(
                (acc, current) => acc + +current.price * +current.qty,
                0
              )}
            </span>
            <Button variant="warning" onClick={()=>{
             setTimeout(()=>{
              dispatch({
              type:"emptyCart"
            })
              navigate("/")
            },3500) 
            notify()
            }}>
              {" "}
              Order
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              style={{ width: "400px" }} 
            />
            <Button variant="dark" onClick={() => navigate("/")}>
              {" "}
               Home
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col xs={2} className="align-self-center">
                    <Image src={prod.image} fluid rounded />{" "}
                  </Col>
                  <Col xs={4} className="align-self-center">
                    {prod.name} <span className="mx-3 fw-bold">{prod.category.toUpperCase()}</span>
                  </Col>
                  <Col xs={2} className="fw-bold align-self-center">
                    ₹ {prod.price.split(".")[0]}
                  </Col>
                  <Col xs={2} className="align-self-center">
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "changeQty",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((item) => (
                        <option key={item + 4}>{item + 1} </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col xs={2} className="align-self-center">
                    {" "}
                    <AiFillDelete
                      fontSize={35}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({ type: "removeToCart", payload: prod })
                      }
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

/*
                    
*/
