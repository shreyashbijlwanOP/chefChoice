import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import NavCategory from "./Catogery/NavCategory";
import NavCart from "./NavCart/NavCart";
import NavLogin from "./NavLogin/NavLogin";

const Navbar = () => {
let param = useParams()
useEffect(()=>{
  console.log(param)
},[param])
  return (
      <nav className=" container-fluid d-flex align-items-center justify-content-between px-lg-5 px-sm-0 shadow position-sticky top-0 bg-light">
      <div className="navbrand flex-grow-1">
        <Link to = "/"><div className="fw-bold ">ChefChoice</div></Link>
      </div>
      {!param.id && <NavCategory /> }
      <NavLogin name={"Login"}    />
      <NavCart name={"Cart"}  placement={'end'} />

     
    </nav>
  );
};

export default Navbar;
