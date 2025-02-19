import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  if (isLoading) return <p>loading</p>;

  return (
    <div className="h-[80vh] w-[90%] mx-auto my-8 grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
      <img
        className="w-full object-cover h-[80%] rounded-sm"
        src={data.image_url}
        alt=""
      />
      <div className="border border-gray-300 h-[80%] rounded-sm">
        
      </div>
    </div>
  );
};

export default Details;
