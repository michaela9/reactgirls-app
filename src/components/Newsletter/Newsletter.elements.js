import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { Paragraph } from '../reusable/styled';

export const NewsletterContainer = styled.div `
    display: flex;
    max-width: 680px;
    height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const ParagraphCenter = styled(Paragraph) `
    text-align: center;
`;


