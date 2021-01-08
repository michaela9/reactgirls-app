import styled from 'styled-components';
import { sizes, breakpoints } from '../../../variables';

export const StudentWrapper = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        padding-top: 60px;
        padding-bottom: 60px;      
    }
`;

export const StudentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1000px;
    width: 90%;
    justify-content: space-between;
    margin: 80px auto 0 auto;
    

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        flex-direction: column;
        padding-bottom: 20px;
        align-items: center;
        margin: 20px auto 0 auto;  
    }
`;

export const StudentCard = styled.div`
    width: 30%;
    max-width: 250px;
    //height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 75%;
        
    }

`;

export const StudentHeading = styled.h3`
    font-size: ${sizes.sizeM} ;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
`;

export const StudentText = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: ${sizes.sizeS};
    line-height: 1.6;
`;

export const StudentIcon = styled.img`
    width: 80px;
    height: 80px;
    margin: 50px auto 30px auto;
`;
