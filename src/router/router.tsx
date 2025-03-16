import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Result from "../pages/Result";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default Router;
