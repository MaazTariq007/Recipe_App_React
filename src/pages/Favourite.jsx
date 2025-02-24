import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/cards";
import SkeletonLoader from "../components/Skeleton";

const Favourite = ({ favourite }) => {
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
  }, [favourite]);

  return (
    <>
      <div className="text-center text-5xl font-bold my-4">Favourite</div>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-12 mx-auto w-[85%] gap-4.5">
          {favourite.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Favourite;
