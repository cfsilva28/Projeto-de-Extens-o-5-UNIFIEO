import styled from "styled-components";
import illustration from "../../assets/Illustration.svg";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100vh;

  background: url(${illustration}) no-repeat right;
  background-size: contain;
  background-position: right center;

  @media (max-width: 1400px) {
    background: ${({ theme }) => theme.colors.green};
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderStyled = styled.header`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  h1 {
    font: 700 2.3rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.green};
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    cursor: pointer;
  }

  nav li a {
    text-decoration: none;
    font: 500 1.2rem "Roboto", sans-serif;
    color: #fff;
    padding-right: 30px;
  }

  nav button {
    color: ${({ theme }) => theme.colors.green};
    font: 500 1.2rem "Roboto", sans-serif;
    background: #fff;
    border: 0;
    padding: 18px 24px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    h1 {
      transition: 1.8s all;
      color: ${({ theme }) => theme.colors.backgroundWhite};
    }
  }

  @media (max-width: 930px) {
    transition: 1.8s all;
    padding: 0 20px;
    h1 {
      font-size: 2rem;
    }
    nav li a {
      transition: 1.8s all;
      font-size: 1rem;
    }
    nav button {
      transition: 1.8s all;
      font-size: 1rem;
      padding: 14px 16px;
    }
  }

  @media (max-width: 640px) {
    padding: 0 20px;
    h1 {
      font-size: 1.7rem;
    }
    nav li a {
      font-size: 0.8rem;
      padding-right: 10px;
    }
    nav button {
      font-size: 0.8rem;
      padding: 12px 14px;
    }
  }

  @media (max-width: 500px) {
    padding: 0 10px;
    h1 {
      font-size: 1rem;
    }
    nav li a {
      font-size: 0.7rem;
      padding-right: 10px;
    }
    nav button {
      font-size: 0.7rem;
      padding: 10px 8px;
    }
  }
`;

export const SearchRecipesStyled = styled.div`
  margin: 150px 0 0 100px;
  width: 368px;
  h2 {
    font: 700 4rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
  }

  div {
    width: 450px;
    display: flex;
    align-items: center;
  }

  input {
    width: 358px; 
    margin-right: 20px;
  }

  button {
    margin-left: 10px;
    width: 70px;
    height: 60px;
  }

  @media (max-width: 1400px) {
    transition: 1.8s all;
    margin: 0;
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button {
      transition: 1.8s all;
      background: ${({ theme }) => theme.colors.backgroundWhite};
      color: ${({ theme }) => theme.colors.textColor};
    }
    
    h2 {
      max-width: 400px;
    }
  }
  
  @media (max-width: 570px) {
    padding: 100px 30px 30px 30px;
    h2 {
      transition: 1.8s all;
      font-size: 2.5rem;
    }
    div {
      width: 100%;
    }
    input {
      width: 100%;
    }
  }
`;
