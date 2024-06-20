import { React, useEffect, useState } from "react";
import FoodData from "../data/FoodData.js";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice.jsx";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  // we list all category available. we didn.t type all category from fooddata . like agar 100 category h food k to data padh ke 100 button nhi bnayenge we use this fn. whch list all category available in our data into a array nd by mapping we display all category using single button as we do below;

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };
  //console.log(categories); // ['Lunch', 'Breakfast', 'Dinner', 'Snacks']
  //we get all categories available in our FoodData , Set() is a Data structure h jo ki most repeated value h usme se common chose krega like if lunch is 5 times it wrap lunch only 1 time

  useEffect(() => {
    //matlab jaise hi render ho page it runs that fn. so we get all actegory available from our data
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category); //menas we get initial State's access

  return (
    <div className="ml-6">
      <h3 className="font-semibold text-black text-xl">Find the Best Foods</h3>

      <div className="flex gap-3 my-5 overflow-scroll scroll-smooth lg:overflow-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 text-center text-sm font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white 
            ${selectedCategory === "All" && "bg-green-500 text-white"}`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 text-center text-sm font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white
                ${selectedCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
