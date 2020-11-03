import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`; 

export const WrapperReverse = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
`; 

export const ProductTitle = styled.h1`
    font-size: 60px;
    font-weight: 900;
    color: rgba(7, 92, 104, 1);
    text-align: center;
`;

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 45%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
`;

export const ProductInfoTitle = styled.h2`
    line-height:2;
    font-size: 48px;
    font-weight: 900;
`;

export const ProductInfo = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: grey;
    line-height: 1.8;
`;

export const ProductImg = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 200px;
`;



