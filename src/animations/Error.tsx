import Lottie from "lottie-react";
import error from "./error.json";

export const Error = () => (
  <Lottie
    animationData={error}
    loop={true}
    style={{
      width: "400px",
    }}
  />
);
