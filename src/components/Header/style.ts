import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
  }

  .links {
    ul {
      display: flex;
      gap: 2rem;
    }
  }
`;
