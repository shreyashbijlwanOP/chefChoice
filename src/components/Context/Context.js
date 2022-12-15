import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import Reducer from "./Reducer";
// Created Context
let Cart = createContext(null);
// faker.seed(99)
// Creating Context Provider
const Context = ({ children }) => {
  let products = [...Array(21)].map((product) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.helpers.arrayElement(["chicken", "mutton"]),
    description: faker.commerce.productDescription(),
    image: faker.image.food(300, 200, true),
    inStock: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  let [state, dispatch] = useReducer(Reducer, {
    products,
    cart: [],
    isAuthenticate: "",
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

// Exporting Context
export default Context;

// Exporting Use Cart Context to use Context
export const useCartContext = () => useContext(Cart);
