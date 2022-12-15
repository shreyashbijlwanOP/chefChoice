import "./App.css";
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import CartPage from "./components/Pages/CartPage";
import CategoryPage from "./components/Pages/CategoryPage";
function App() {
  return (
    <div className="App position-relative">
      
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path="/category/:id" element={<CategoryPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
