import styled from 'styled-components';
import { Paragraph, TitleCenter } from '../styled';
import { colors } from '../../../variables';

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


