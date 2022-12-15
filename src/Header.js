import React from "react";
import {FaShoppingCart} from "react-icons/fa"
import {
    Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Food App{" "}
          </Link>
        </NavbarBrand>
        <FormControl
          style={{ width: "250px" }}
          placeholder="Search you Product Here..."
          className="m-auto"
        />
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart fontSize={25} />
            <Badge bg="success">10</Badge>

            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:"370px"}}>
              <Dropdown.Item> Cart is Empty</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
