import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux"; //use Dispatch is used for mujhe us function/reducer ko use krne k liye jo humne slice m bnaya hai
import { addToCart } from "../redux/Slices/CartSlice";

function FoodCard({ id, name, rating, img, desc, price, handleToast }) {
  const dispatch = useDispatch();

  return (
    <div className=" font-bold w-[250px] bg-white p-5 flex flex-col gap-5 rounded-lg">
      <img
        src={img}
        alt="Pizza"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />

      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>

      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

      <div className="flex justify-between ">
        <span className="flex items-center ">
          <FaStar className="mr-1 text-yellow-400" />
          {rating}
        </span>

        <button
          onClick={() => {
            // means when we click this buton ye dispatch kr de addToCart method ko ;
            dispatch(addToCart({ id, name, price, img, rating, qty: 1 }));
            handleToast(name); //jaise hi item dispatch ho/cart m add ho toast ho jaye /alert aa jaye
          }}
          className="p-1 text-sm font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
