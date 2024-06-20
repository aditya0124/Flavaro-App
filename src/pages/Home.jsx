import React from "react";
import NavBar from "../components/NavBar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <NavBar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
