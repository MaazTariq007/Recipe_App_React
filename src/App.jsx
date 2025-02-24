import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("pizza");

  const [favourite, setFavourite] = useState([]);

  const addToFavourite = (meal) => {
    console.log("click");
    console.log(meal);
    if (meal.id != favourite.id) {
      setFavourite([...favourite, meal]);
    }
    else {
      setFavourite(favourite.filter(item => item.id != meal.id))
    }
  }


  return (
    <>
      <Header search={search} setSearch={setSearch} favourite={favourite} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/details/:id" element={<Details addToFavourite={addToFavourite} />} />
        <Route path="/favourite" element={<Favourite favourite={favourite} />} />
      </Routes>
    </>
  );
};

export default App;
