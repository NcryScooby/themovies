import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 500px;
  background-color: #ffffff;
  border-radius: 4px;
  gap: 1rem;

  p {
    margin: 0px 100px;
  }

  .anchor {
    margin-top: 1rem;
    border: none;
    padding: 10px 20px;
    color: #ffffff;
    background-color: #292929;
    border-radius: 4px;
    font-size: 1rem;
    width: 60%;
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: #000000;
    }
  }
`;
