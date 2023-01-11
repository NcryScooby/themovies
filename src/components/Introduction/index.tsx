import { Movie } from "../../animations/Movie";
import { Container, Title } from "./style";

export const Introduction = () => {
  return (
    <Container>
      <div>
        <Title>Find out which movies are showing at the cinema.</Title>
      </div>
      <div>
        <Movie />
      </div>
    </Container>
  );
};
