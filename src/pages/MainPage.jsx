import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies,getGenres } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  // subscribe to the store
  const state = useSelector((store) => store.movieReducer);


  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* For each category, first get the movies of the category from API and then send the component that will pass them to the screen. */}
      {state.genres.map((genre) => <MovieList key={genre.id} genre={genre} /> )}
    </div>
  );
};

export default MainPage;
