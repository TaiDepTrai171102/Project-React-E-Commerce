import React from "react";
import AllProducts from "./ProductPage/AllProducts";
import Sidebar from "../../../../components/layouts/Sidebar";
import Navbar from "../../../../components/layouts/Navbar";
import "./style.scss"
function Products() {
  return (
    <div className="over">
    <div className="list">
        <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <AllProducts />
    </div>
  </div>
    </div>)
}

export default Products;
