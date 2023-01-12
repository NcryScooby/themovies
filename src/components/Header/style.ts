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
      align-items: center;
      gap: 2rem;
    }

    button {
      border: none;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.backgroundColor};
      background-color: ${({ theme }) => theme.colors.textColor};
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #525252;
        color: #ffffff;
      }
    }
  }
`;
