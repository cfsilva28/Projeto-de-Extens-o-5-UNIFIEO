import styled from "styled-components";

export const Container = styled.main`
  max-width: 90rem;
  margin: 0 auto;

  .owl-dots {
    display: none;
  }

  .owl-nav {
    display: none;
  }

  @media (max-width: 1395px) {
    max-width: 70rem;
  }

  @media (max-width: 1150px) {
    max-width: 50rem;
  }

  @media (max-width: 850px) {
    max-width: 45rem;
  }
  @media (max-width: 700px) {
    max-width: 22rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  height: 32rem;
  width: 26rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 0px 15px #0001;

  display: flex;
  flex-direction: column;

  h2 {
    padding: 30px;
    font: 700 1.8rem "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 1395px) {
    transition: 1.8s all;
    width: 21rem;
    height: 27rem;

    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 250px;

  img {
    height: 60px;
    border-radius: 50px;
  }

  p {
    width: 100%;
    font: 400 0.9rem "Montserrat", sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
