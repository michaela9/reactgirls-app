import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';

export const ContactCardContainer = styled.div`
    display: flex;
    width: 1000px;
    margin: 0 auto;
    justify-content: space-around;
`;


export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ContactImg = styled.img`
    height: 180px;
    width: 180px;
    border-radius: 90px;
    margin-bottom: 25px;
`;

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;

`;

export const ContactName = styled.h3`
    font-weight:700;
    margin-bottom: 10px;
`;

export const ContactInterest = styled.p`
    font-size: ${sizes.sizeXS};
`;

export const ContactMail = styled.p`
    font-size: ${sizes.sizeXS};
`;

export const ContactNumber = styled.p`
    font-size: ${sizes.sizeXS};
    margin-bottom: 15px;
`;

export const ContactSocial = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
    align-items: center;
`;

export const SocialContactIcon = styled.img`
    width: 20px;
    height: 20px;
`;

