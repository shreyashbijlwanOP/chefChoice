import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCartContext } from "../Context/Context";

const Product = ({ prods }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  return (
    <div className="products">
      <Card className="shadow my-2" style={{ maxWidth: "350px" }}>
        <Card.Img variant="top" src={prods.image} alt={prods.name} />
        <Card.Body>
          <Card.Title>{prods.name}</Card.Title>
          <Card.Subtitle className="fw-bold">
            {" "}
            INR: {prods.price.split(".")[0]}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: ".9rem" }} className="my-3">
            {prods.description}
          </Card.Text>
          {cart.some((p) => p.id === prods.id) ? ( <Button 
            variant="outline-dark"
            onClick= {()=>dispatch({type:"removeToCart",payload:prods})}
          >
          Remove</Button>) : 
          ( <Button
              variant={prods.inStock ? "outline-danger" : "danger"}
              disabled={!prods.inStock}
              onClick= {()=>dispatch({type:"addToCart",payload:prods})}
            >
              {prods.inStock ? "Add to cart" : "out of stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
