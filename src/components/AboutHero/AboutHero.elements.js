import styled from 'styled-components';
import  { colors } from '../../variables.js';
import { Button, Paragraph, TitleCenter, Subtitle } from '../reusable/styled';

export const SubTitleAbout = styled(Subtitle)`
    text-align: center;
 `;
 
export const ButtonAbout = styled(Button)`
    align-items: center;
    align-self: center;
`;

export const AboutText = styled(Paragraph)`
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.grey};
    font-weight: 300;
`;

export const WrapperAbout = styled.div`
    max-width: 1280px;
    padding: 80px 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const AboutTitle = styled(TitleCenter)`
    padding-bottom: 40px;
`;