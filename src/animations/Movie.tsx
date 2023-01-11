import Lottie from "lottie-react";
import movie from "./movie.json";

export const Movie = () => (
  <Lottie
    animationData={movie}
    loop={true}
    style={{
      width: "400px",
    }}
  />
);
