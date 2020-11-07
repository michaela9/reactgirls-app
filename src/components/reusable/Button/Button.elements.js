import styled from 'styled-components';

export const ButtonMain = styled.button`
    font-size: 18px;
    border: none;
    border-radius:30px;
    background-color: rgb(0,180,205);
    color: white;
    padding: 10px 35px;

    &:hover {
        background: black;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 105px;
    align-items: flex-start;
    justify-content: space-between;
`;