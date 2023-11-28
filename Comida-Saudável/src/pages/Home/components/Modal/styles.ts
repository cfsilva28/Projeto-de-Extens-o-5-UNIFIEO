import styled from "styled-components";

export const ButtonModal = styled.button`
  border: 0;
  cursor: pointer;
  background: #fff;
  color: ${({ theme }) => theme.colors.green};
  font: 700 1rem "Roboto", sans-serif;
  padding-left: 10px;
`;

export const HeaderModalStyled = styled.header`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    h2 {
      font: 700 1.3rem "Roboto", sans-serif;
      margin-left: 15px;
    }
  }
  button {
    background: ${({ theme }) => theme.colors.green};
    border: 0;
    color: ${({ theme }) => theme.colors.backgroundWhite};
    cursor: pointer;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

export const BodyModalStyled = styled.main`
  max-width: 600px;
  margin: 30px 0 30px 50px;
  border-radius: 30px;
  padding: 20px;
  background: #f7fafc;

  h2 {
    font: 500 1.3rem "Roboto", sans-serif;
    padding-bottom: 10px;
  }

  button {
    width: 100%;
    margin: 30px 0;
  }

  @media (max-width: 730px) {
    background: #fff;
    margin: 30px;

    button {
      margin: 0;
      height: 40px;
    }
  }

  form {
    max-height: 90vh;
  }
`;

export const InputModalStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 90%;
    @media (max-width: 730px) {
      width: 100%;
    }
  }

  @media (max-width: 730px) {
    transition: 1.8s all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      input {
        transition: 1.8s all;
        height: 35px;
        font-size: 1rem;
      }
    }
  }
`;
