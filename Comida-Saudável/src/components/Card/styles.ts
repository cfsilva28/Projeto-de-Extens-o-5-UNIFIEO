import styled from "styled-components";

export const ContainerStyled = styled.main`
  display: flex;
  align-items: center;
  width: 580px;
  border-radius: 8px;
  margin: 30px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: 0px 0px 15px #0001;
  
  img {
    height: 250px; 
  }

  @media(max-width: 1320px) {
    transition: 1.8s all;
    width: 500px;
    img {
      transition: 1.8s all;
      height: 200px;
    }
  }
  @media(max-width: 1125px) {
    width: 400px;
    img {
      height: 150px;
    }
  }
  @media(max-width: 485px) {
    width: 350px;
    img {
      height: 140px;
    }
  }
  `;
  
  export const ContentStyled = styled.div`
  h2 {
    font: 700 1.8rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
    padding-left: 30px;
    width: 250px;
  }
  
  button {
    margin: 15px 0 0 30px;
  }

  @media(max-width: 1125px) {
    h2 {
      transition: 1.8s all;
      font-size: 1.2rem;
    }
    
    button {
      transition: 1.8s all;
      width: 120px;
      height: 40px;
    }
  }
  @media(max-width: 485px) {
    h2 {
      font-size: 1rem;
      width: 180px;
    }
    
    button {
      width: 100px;
      height: 30px;
      font-size: 1rem;
    }
  }
`;
