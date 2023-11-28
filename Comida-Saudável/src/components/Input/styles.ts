import styled from "styled-components";

export const Container = styled.div`
  input {
    width: 100%;
    height: 58px;
    padding: 0 16px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    background: #fff;
    margin: 16px 0;
    outline: 0;
    font: 400 1.1rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
