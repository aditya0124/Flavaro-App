import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
        }}
        className="absolute right-7 text-gray-700 cursor-pointer"
      />

      <img src={img} alt="img" className="w-[50px] h-full" />

      <div className="">
        <h2 className="font-bold text-gray-600">{name}</h2>

        <div className="flex justify-between">
          <span className="font-bold text-green-500">₹{price}</span>

          <div className="flex gap-2 justify-center items-center absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer"
            />

            <span>{qty}</span>

            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all  ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
