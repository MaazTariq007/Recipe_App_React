import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
