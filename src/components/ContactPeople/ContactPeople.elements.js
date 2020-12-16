import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { ParagraphS } from '../reusable/styled';

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

export const ContactSocial = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
    align-items: center;
`;

export const SocialContactIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 10px;
`;

export const ContactInfo = styled(ParagraphS)`
    font-weight: 300;
    color:${colors.grey};   
    line-height: 1;
    font-size: ${sizes.sizeXS};
`;

