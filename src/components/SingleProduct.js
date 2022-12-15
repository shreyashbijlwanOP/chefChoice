import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SingleProduct = ({elem}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={elem.image} />
    <Card.Body>
      <Card.Title>{elem.name}</Card.Title>
    <Card.Subtitle>INR : {elem.price.split(".")[0]}</Card.Subtitle>
      <Card.Text>{elem.description.slice(0,75)}</Card.Text>
      <Button variant="primary">Add to Cart</Button>
    </Card.Body>
  </Card>
  )
}

export default SingleProduct