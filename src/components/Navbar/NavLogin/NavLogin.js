import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function LoginNav({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav-login">
      <Button variant="light" onClick={handleShow} className="me-2 d-flex gap-1">
        <img
          src="https://www.licious.in/img/rebranding/profile_icon.svg"
          alt=""
        />
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default LoginNav;
