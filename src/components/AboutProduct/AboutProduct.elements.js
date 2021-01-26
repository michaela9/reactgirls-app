import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables';
import { Paragraph, ParagraphS } from '../reusable/styled';


export const WrapperAbout = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;   
   @media only screen and (max-width: ${breakpoints.tablet}) {
    padding-top: 40px;
    }
`;

export const ItemContainer = styled.div`
    padding: 40px 0 80px 0;
    margin: 0 auto;
    //width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1000px ) {
        max-width: 900px;
    }

    @media only screen and (max-width: 1000px ) {
        max-width: 350px;
    }
`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    padding-top: 40px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;

    @media only screen and (max-width: 1000px) {
        width: 85%;
        padding-top: 30px;
}
`;

export const ItemRow = styled.div`
    display: flex;
    margin-top: 25px;
    border-radius: 50%;
    background-color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 10px;
    width: 140px;
    height: 140px;

    @media only screen and (max-width: 1000px ) {
        width: 90px;
        height: 90px;
        margin: 5px;  
    }   

`;

export const ItemIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 15px;
`;

export const ItemText = styled(ParagraphS)`
    font-size: ${sizes.sizeS};
    width: 95%;
    text-align: center;
    font-weight: 500;
    color: ${colors.grey};
    @media only screen and (max-width: 1000px ) {
        font-size: ${sizes.sizeXXS};
    }
`;
