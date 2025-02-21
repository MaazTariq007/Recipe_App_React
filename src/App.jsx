import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";
import { useState } from "react";

const App = () => {
  // const [search, setSearch] = useState("pizza");

  return (
    <>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </>
  );
};

export default App;
