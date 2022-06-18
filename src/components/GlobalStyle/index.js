import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 
    


}

button{
    cursor:pointer;
    
}

ul, ol, li{
    list-style: none;
}

body{
    background-color: #B0C4DE;
    display: flex;
    justify-content: space-around;
    
}
`;

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) => props.containerWidth};
  padding: 1rem;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

export const formStyled = styled.form`
  padding: 5px;
  max-width: 400px;
  background-color: #708090;
  color: #f8f8ff;

  button {
    color: #708090;
    background-color: #d3d3d3;
    border: 1px solid #708090;
  }
`;

export const divFormatada = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
