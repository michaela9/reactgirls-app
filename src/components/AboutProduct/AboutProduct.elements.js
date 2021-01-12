import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables';
import { Paragraph } from '../reusable/styled';


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
    width: 20%;

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
`;

export const ItemIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 15px;
`;

export const ItemText = styled.div`
    font-size: ${sizes.sizeS};
`;
