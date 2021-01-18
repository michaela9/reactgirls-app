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


    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 63%;
        padding: 20px 0 40px 0;
}
`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    padding-top: 40px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        width: 85%;
        padding-top: 30px;
}
`;

export const ItemRow = styled.div`
    display: flex;
    margin-top: 25px;
    
    @media only screen and (min-width: 539px) {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
        margin-left: 20px;
    }
    @media only screen and (max-width: 539px) {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
        margin-left: 5px;
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
    @media only screen and (max-width: 539px) {
        font-size: ${sizes.sizeXXS};
    }
`;
