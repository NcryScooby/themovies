import styled from "styled-components";

export const Movie = styled.div`
  display: flex;
  justify-content: center;

  .movie-details {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    align-items: flex-start;

    img {
      width: 300px;
    }

    span {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-size: 4rem;
      }
      p {
        max-width: 80ch;
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #292929;
  border-radius: 4px;
  font-size: 1rem;
  width: 40%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
  }

  a {
    display: block;
    width: 100%;
  }
`;
