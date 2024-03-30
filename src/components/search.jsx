import React from "react";
import "./search.css";
import { FiSearch, FiMic, FiVideo, FiGrid, FiBell } from "react-icons/fi";
import profile from "../assets/profile.jpg";

const Search = () => {
  return (
    <div className="search-container">
      <button className="mic w-[40px] h-[40px] bg-[#d7cc99] justify-center mr-2">
        <FiMic color={"#001523"} size={17} />
      </button>
      <div className="search-bar bg-[#14293a] mr-9">
        <input type="text" placeholder="Search..." />
        <button>
          <FiSearch color={"#fff"} />
        </button>
      </div>
      <div className="flex">
        <button className="pr-4">
          <FiVideo color={"#fff"} size={17} />
        </button>
        <button className="">
          <FiGrid color={"#fff"} size={17} />
        </button>
        <button className="pl-4">
          <FiBell color={"#fff"} size={17} />
        </button>
        <button className="">
          <img
            src={profile}
            alt=""
            className="h-[30px] w-[30px] ml-4 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Search;
