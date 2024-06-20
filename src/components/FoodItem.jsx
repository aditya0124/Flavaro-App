import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItem() {
  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`);
  };

  const category = useSelector((state) => state.category.category);

  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            // return food; //before using search fn. we return this
            return food.name.toLowerCase().includes(search.toLowerCase()); // first convert foodname to lowercase  and return the food that name includes letter in search variable(It also converted in lowercase). we convert both search and food to name to lower or uppercase for compairing.
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase()) //same as first
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            img={food.img}
            name={food.name}
            price={food.price}
            desc={food.desc}
            category={food.category}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}

        {/* ye abtak ho rha tha
        FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        }) */}
      </div>
    </>
  );
}

export default FoodItem;
