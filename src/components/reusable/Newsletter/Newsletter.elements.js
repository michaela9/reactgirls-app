import styled from 'styled-components';
import { colors } from '../../../variables';
import { Paragraph, TitleCenter } from '../styled';

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

export const MyForm = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid red;
`;

export const ButtonInputCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
`;


