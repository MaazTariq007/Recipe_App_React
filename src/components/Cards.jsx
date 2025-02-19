import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="h-[450px] border border-gray-300 rounded-md shadow hover:shadow-2xl hover:translate-y-[-10px] duration-350 overflow-hidden">
      <img
        className="w-full h-[320px] object-cover"
        src={item.image_url}
        alt=""
      />
      <div className="p-2">
        <p className="text-blue-400 font-bold text-[12px]">{item.publisher}</p>
        <p className="text-2xl truncate font-medium text-blue-900 mt-1 ">
          {item.title}
        </p>
        <Link
          to={`/details/${item.id}`}
          className="bg-blue-400 py-1 px-2  block w-max mt-4 rounded-md text-white cursor-pointer font-medium hover:bg-blue-600"
        >
          Check Recipe 🤤
        </Link>
      </div>
    </div>
  );
};

export default Cards;
