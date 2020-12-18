import styled from 'styled-components';
import { colors } from '../../variables.js';
import { Paragraph, TitleCenter } from '../reusable/styled';

export const NewsletterContainer = styled.div `
    display: flex;
    height: 320px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const ParagraphCenter = styled(Paragraph) `
    text-align: center;
    color: ${colors.grey};
    font-weight: 300;
`;

export const TitleCenterNews = styled(TitleCenter) `
    width: 100%;
`;


