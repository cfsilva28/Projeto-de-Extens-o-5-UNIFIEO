import styled from "styled-components";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundGray};
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

  @media (max-width: 920px) {
    height: 150px;
  }

  @media (max-width: 620px) {
    p {
      transition: 1.8s all;
      width: 100%;
      padding: 0 10px;
    }
  }
`;

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
