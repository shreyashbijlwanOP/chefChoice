import React from "react";
import { Link } from "react-router-dom";

const Catogory = () => {
  return (
    <div className="category-section" style={{ backgroundColor: "whitesmoke" }}>
      <div className="category-title my-3`">
        <h2 className="fw-bold text-dark text-center">Shop By Category</h2>
      </div>

      <div className="container category-items d-flex justify-content-around flex-wrap">
      <Link to ="/category/chicken">
      <div className="category-item shadow my-4">
          <img
            src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/85c38154-50b0-d61b-cf39-c4a3ff5dd4f7/original/Chicken_(1).png"
            alt="chicken"
          />
          <h3 className="h3 text-center">Chicken</h3>
        </div></Link>
        <Link to ="/category/mutton">
        <div className="category-item shadow my-4">
          <img
            src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/02337ccd-8109-c890-c9e9-226563158761/original/FIsh.png?format=webp"
            alt="mutton"
          />
          <h3 className="h3 text-center ">Mutton</h3>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Catogory;
