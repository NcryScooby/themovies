import { Header } from "../../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Backdrop, CircularProgress } from "@mui/material";
import { Movie } from "./style";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

export const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({} as Movie);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovie = async () => {
      await api
        .get(`movie/${id}`)
        .then((response) => setMovie(response.data))
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
      setLoading(false);
    };

    loadMovie();
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      <Header />
      <Movie>
        <div key={movie.id} className="movie-details">
          {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          ) : null}
          <span>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {movie.vote_average ? <h2>Popularity: {movie.vote_average.toFixed(1)} / 10</h2> : null}
            <a
              href={`https://youtube.com/results?search_query=trailer ${movie.title}`}
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              Watch Trailer
            </a>
          </span>
        </div>
      </Movie>
    </>
  );
};
