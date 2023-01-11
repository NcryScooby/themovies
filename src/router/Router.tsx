import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MoviesDetails } from "../pages/MoviesDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MoviesDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
