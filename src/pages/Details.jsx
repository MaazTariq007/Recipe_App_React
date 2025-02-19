import React from "react";

const Details = () => {
  return (
    <div className="h-[80vh] w-[90%] mx-auto my-8 grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
      <img
        className="w-full object-cover h-[80%] rounded-sm"
        src="https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg"
        alt=""
      />
      <div className="border"></div>
    </div>
  );
};

export default Details;
