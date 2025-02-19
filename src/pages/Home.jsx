import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/cards";
import SkeletonLoader from "../components/Skeleton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
      );
      console.log(response.data.data.recipes);
      setData(response.data.data.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <div className="text-center text-5xl font-bold my-4">Recipes</div>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-12 mx-auto w-[85%] gap-4.5">
          {data.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
