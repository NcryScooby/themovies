import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, MoviesList } from "./style";
import { Link } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("movie/now_playing");
      setMovies(response.data.results.slice(0, 12));
      setLoading(false);
    };

    loadMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
      <Header />
      <Container>
        <MoviesList>
          {movies.map((movie: Movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <h1>{movie.title}</h1>
              <Link to={`/movie/${movie.id}`}>Details</Link>
            </div>
          ))}
        </MoviesList>
      </Container>
    </>
  );
};
