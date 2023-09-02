import Category from "./Category/Category";
// import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Brands from "./Brand/Brand"
import "./Sidebar.css";
import {TiShoppingCart}  from "react-icons/ti";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <TiShoppingCart size={50}/>
        </div>
        <Category handleChange={handleChange} />
        <Brands handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
