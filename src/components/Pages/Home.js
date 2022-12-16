import React from "react";
import BestSeller from "../BestSeller/BestSeller";
import Catogory from "../CatogerySection/Catogory";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer";
const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="banner">
        <img
          alt="AKT"
          title="AKT"
          width="100%"
          src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e"
        ></img>
      </div>
      <Catogory />
      <BestSeller />
      <Footer />
    </main>
  );
};

export default Home;
