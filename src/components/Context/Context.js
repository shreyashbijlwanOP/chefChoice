import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import Reducer from "./Reducer";
export let Cart = createContext(null);
faker.seed(99);

const Context = ({ children }) => {
  let products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(420,350,true),
    category: faker.commerce.product(),
    description:faker.commerce.productDescription(),
    inStoke: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    Rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

console.log(products)
  let [state, dispatch] = useReducer(Reducer, {
    products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;
