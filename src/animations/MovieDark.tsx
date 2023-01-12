import Lottie from "lottie-react";
import movie from "./movieDark.json";
import { useSizeScreen } from "../hooks/useSizeScreen";

export const MovieDark = () => {
  const size = useSizeScreen();

  return (
    <Lottie
      animationData={movie}
      loop={true}
      style={
        size.width > 600
          ? {
              width: "400px",
            }
          : { width: "200px" }
      }
    />
  );
};
