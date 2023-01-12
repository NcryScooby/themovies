import { Error } from "../../animations/Error";
import { Container, Box } from "./style";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Box>
          <Error />
          <p>
            This page is not available. The link you accessed may be broken or the page may have
            been removed.
          </p>
          <Link to="/" className="anchor">
            Go back to home
          </Link>
        </Box>
      </Container>
    </>
  );
};
