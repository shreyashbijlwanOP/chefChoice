import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
