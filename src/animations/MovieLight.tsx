import Lottie from "lottie-react";
import movie from "./movieLight.json";

export const MovieLight = () => (
  <Lottie
    animationData={movie}
    loop={true}
    style={{
      width: "400px",
    }}
  />
);
