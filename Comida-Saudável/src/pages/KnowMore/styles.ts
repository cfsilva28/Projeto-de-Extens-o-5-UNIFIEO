import styled from "styled-components";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 940px) {
    padding: 50px 0;
  }
`;

export const AsideStyled = styled.aside`
  width: 100%;
  img {
    width: 100%;
  }

  @media (max-width: 940px) {
    display: none;
  }
`;
export const ContentStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 470px;
    margin: 30px;
    h2 {
      font: 700 2.2rem "Montserrat", sans-serif;
      color: ${({ theme }) => theme.colors.textColor};
      padding-bottom: 20px;
    }
    p {
      color: ${({ theme }) => theme.colors.lightGray};
      font: 400 1.1rem "Montserrat", sans-serif;
      padding: 15px 0;
      line-height: 2;
    }
    button {
      margin-top: 30px;
    }
  }

  @media (max-width: 1316px) {
    div {
      h2 {
        transition: 1.8s all;
        font-size: 2rem;
      }
      p {
        transition: 1.8s all;
        line-height: 1.5;
      }
    }
  }
  @media (max-width: 1057px) {
    div {
      h2 {
        font-size: 1.5rem;
      }
      p {
        line-height: 1.3;
      }
    }
  }

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 540px) {
    div {
      width: 100%;
      padding: 30px;
    }
  }
`;
