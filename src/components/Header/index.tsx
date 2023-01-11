import logo from "../../assets/logo.svg";
import { Container } from "./style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Theme</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};
