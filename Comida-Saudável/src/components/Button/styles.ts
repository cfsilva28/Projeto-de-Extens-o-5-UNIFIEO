import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: 55px;
    width: 150px;
    font: 300 1.2rem "Roboto", sans-serif;
    color:${({ theme }) => theme.colors.backgroundWhite} ;
    background:${({ theme }) => theme.colors.green} ;
    border: 1px solid ${({ theme }) => theme.colors.green};
    border-radius: 8px;
    box-shadow: 2px 2px 10px #badc58;
    cursor: pointer;
    transition: 0.4s;
    
    &:hover{
        filter: opacity(0.8);
    }
    &:disabled{
        filter: opacity(0.4);
    }
`;