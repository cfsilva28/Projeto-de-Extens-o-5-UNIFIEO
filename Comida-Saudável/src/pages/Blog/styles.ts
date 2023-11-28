import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundGray};

  @media (max-width: 620px) {
    transition: 1.8s all;
    height: 100%;
    padding-bottom: 100px;
  }
`;

export const HeaderStyled = styled.header`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font: 700 2.5rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
    padding-bottom: 15px;
  }

  p {
    text-align: center;
    width: 600px;
    font: 400 1.2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 620px) {
    p {
      transition: 1.8s all;
      width: 100%;
      padding: 0 10px;
    }
  }
`;

export const CarouselStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
