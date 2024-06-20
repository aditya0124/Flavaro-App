import React from "react";
import { useDispatch } from "react-redux";
import { setSerach } from "../redux/Slices/SerachSlice";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
        <div className="Header ">
          <h3 className="text-xl font-bold text-gray-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-2xl font-bold">Flavaro Foods</h1>
        </div>
        <div className="searchBar ">
          <input
            type="search"
            name="Search"
            placeholder="Serach here"
            autoComplete="off"
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] sm:my-3"
            onChange={(e) => dispatch(setSerach(e.target.value))} // here e.target is payload for setserach reducers // and that we type in search bar it goes to  state and we acess state in foodItem.jsx
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
