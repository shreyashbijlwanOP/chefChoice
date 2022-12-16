import React, {  useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { toast, ToastContainer } from "react-toastify";

function LoginNav({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const notify =()=>toast.info('Login Successfully', {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <div className="nav-login">
      <Button
        variant="light"
        onClick={handleShow}
        className="me-2 d-flex gap-1"
      >
        <img
          src="https://www.licious.in/img/rebranding/profile_icon.svg"
          alt=""
        />
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Login Here</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            backgroundImage:
              "url('https://www.licious.in/img/rebranding/user-login-new.jpg')",
          }}
          className="d-flex align-items-center"
        >
          <Card className="w-100">
            <Card.Body>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Mobile Number"
                maxLength="10"
                minLength="10"
               
              />
              <Form.Control
                type="button"
                className="btn btn-danger my-3"
                value="Login"
                onClick={notify}
                />
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
              />
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default LoginNav;
