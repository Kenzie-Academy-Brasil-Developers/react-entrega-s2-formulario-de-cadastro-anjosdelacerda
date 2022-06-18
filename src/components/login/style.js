import styled from "styled-components";

export const SucessoCadastro = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 400px;
  max-width: 100vw;
  padding: 5px;
  color: #ffc125;
  text-shadow: 0.1em 0.1em 0.2em black;

  border-radius: 5px;

  h1 {
    font-size: large;
    font-weight: bold;
  }

  button {
    background-color: #1e90ff;
    color: #afeeee;
    border: 1px solid #afeeee;
    border-radius: 2px;
    font-size: small;

    height: 40px;
    width: 100px;

    text-align: center;
    cursor: pointer;

    margin-top: 38px;
  }
`;
