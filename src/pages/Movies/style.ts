import styled from "styled-components";

export const Container = styled.div``;

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  grid-row-gap: 4rem;
  img {
    max-width: 300px;
  }

  h1 {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  a {
    display: inline-block;
    background-color: #313131;
    padding: 10px 15px;
    color: #ffffff;
    border-radius: 4px;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`;
