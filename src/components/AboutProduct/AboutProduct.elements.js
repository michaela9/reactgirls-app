import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { Paragraph } from '../reusable/styled';


export const WrapperAbout = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
`;

export const ItemContainer = styled.div`
   // display: flex;
   // padding-top: 20px;
   // flex-direction: column;
   // position: relative;
    //left: 8px;
    padding: 40px 0 80px 0;
    margin: 0 auto;
    //border: 1px solid red;
    width: 20%;

`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    padding-top: 40px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;
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
