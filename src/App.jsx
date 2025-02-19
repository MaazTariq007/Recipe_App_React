import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
