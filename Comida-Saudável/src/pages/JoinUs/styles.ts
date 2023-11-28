import styled from "styled-components";
import imageJoinUs from "../../assets/bloco_final_image.svg";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100vh;
`;

export const ContentStyled = styled.main`
  width: 100%;
  display: flex;
`;

export const EmailStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    width: 500px;
    font: 700 2.5rem "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
  }

  div {
    width: 540px;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
      border: 1px solid gray;
    }
  }

  @media (max-width: 1150px) {
    h2 {
      transition: 1.8s all;
      width: 400px;
      font-size: 2rem;
    }
    div {
      transition: 1.8s all;
      width: 400px;
    }
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 1.7rem;
      width: 100%;
      padding: 0 50px;
    }
    div {
      width: 100%;
      padding: 0 20px;
    }
  }
`;

export const AsideStyled = styled.main`
  width: 100%;
  height: calc(100vh - 110px);
  background: url(${imageJoinUs}) no-repeat center;
  background-size: cover;
  background-position: right center;

  @media (max-width: 1050px) {
    width: 0;
    background: none;
  }
`;

export const FooterStyled = styled.main`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font: 500 1.2rem "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
    padding-left: 100px;
  }

  nav ul {
    padding-right: 100px;
    display: flex;
    list-style-type: none;
    cursor: pointer;
  }

  nav li {
    font: 500 1.2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.lightGray};
    padding-right: 30px;
  }

  @media (max-width: 1065px) {
    p,
    nav li {
      transition: 1.8s all;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 850px) {
    p {
      padding-left: 20px;
    }
  }
  @media (max-width: 850px) {
    nav ul {
      padding-right: 20px;
    }
  }

  @media (max-width: 663px) {
    p,
    nav li {
      font-size: 0.7rem;
      padding: 5px;
    }
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
