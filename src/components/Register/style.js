import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: #ffc125;
  height: 400px;
  max-width: 600px;
  padding: 5px;
  color: #1e90ff;
  border: 4px solid #1e90ff;
  border-radius: 5px;

  margin-top: 25%;

  h2 {
    font-size: x-large;
    font-weight: bolder;
    color: #1e90ff;
  }

  input {
    width: 300px;
    height: 60px;
    border: 2px solid #1e90ff;
    border-radius: 4px;

    text-align: center;
  }

  span {
    color: #cd5c5c;
    font-style: italic;
    font-size: 15px;
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
  }
`;
