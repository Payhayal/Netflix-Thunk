import axios from "axios";
import { useEffect, useState } from "react";
import { baseImgUrl, options } from "../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4">
      {!movies && <Loading />}
      {movies && (
        <>
        <h1 className="fs-1 mb-3">{genre.name}</h1>
          <Splide
            options={{
              // type: "loop",
              autoWidth: true,
              gap: "10px",
              pagination: false,
            }}
          >
            {movies?.map((movie) => (
              <SplideSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                <img
                  className="movie"
                  src={baseImgUrl.concat(movie.poster_path)}
                />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default MovieList;
