import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const param = useParams();

  const fetchData = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      console.log(response.data.data.recipe);
      setData(response.data.data.recipe);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let { id } = param;
    fetchData(id);
    console.log(id);
  }, [param]);

  if (isLoading)
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <p className="font-bold text-3xl text-blue-900">loading</p>
      </div>
    );

  return (
    <div className=" lg:h-[80vh] h-auto w-[90%] mx-auto my-8 grid md:grid-cols-2 sm:grid-cols-1 gap-3">
      <img
        className="w-full object-cover md:h-[100%] lg:h-[80%] rounded-sm shadow-lg"
        src={data.image_url}
        alt=""
      />
      <div className="border border-gray-300 lg:h-[80%] h-auto rounded-sm p-4 overflow-y-auto bg-white shadow-md ">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">{data.title}</h1>
        <span className="text-lg text-blue-400 font-bold block mb-4">
          {data.publisher}
        </span>

        <ul className="space-y-2 text-blue-900">
          {data?.ingredients?.map((item, i) => (
            <li
              key={i}
              className="p-2 border border-blue-400 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {`${item.quantity ? item.quantity + " " : ""}${
                item.unit ? item.unit + " " : ""
              }${item.description ? item.description : ""}`}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-blue-900 font-semibold">
          Serving per Person:{" "}
          <span className="text-blue-400">{data.servings}</span>
        </p>
        <p className="text-blue-900 font-semibold">
          Cooking Time:{" "}
          <span className="text-blue-400">{data.cooking_time} minutes</span>
        </p>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 my-2">
          <button className="bg-red-400 hover:bg-red-600 p-3 text-white font-bold rounded-md cursor-pointer">
            Save as Favourite
          </button>
          <Link
            to={"/"}
            className="bg-blue-400 hover:bg-blue-600 p-3 text-white font-bold rounded-md cursor-pointer text-center"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
