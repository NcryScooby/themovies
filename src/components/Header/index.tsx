import logoDark from "../../assets/logoDark.svg";
import logoLight from "../../assets/logoLight.svg";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";

export const Header = () => {
  const { theme, setTheme } = useContext(GlobalStateContext);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Container>
        <div>
          <img src={theme === "light" ? logoLight : logoDark} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <button onClick={handleTheme}>Theme</button>
          </ul>
        </div>
      </Container>
    </>
  );
};
