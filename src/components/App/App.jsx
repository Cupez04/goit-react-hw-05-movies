import { Routes, Route } from "react-router-dom";
import { navLinks } from "../utils/routes";
import { NavBar } from "../NavBar/NavBar";
import { lazy } from "react";

export default App

const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Movies = lazy(() => import('../../pages/Movies'));
const Home = lazy(() => import('../../pages/Home'));
const Casting = lazy(() => import('../Casting/Casting'));

function App () {
  return(
    <>
    <Routes>
    <Route path="/" element={<NavBar navLinks={navLinks} />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Casting />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
    </Routes>
    </>
  )
}