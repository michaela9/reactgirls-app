import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { ParagraphS } from '../reusable/styled';

export const ReferenceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px;
`;

export const Speech = styled.div`
    margin-bottom: 60px;
`;
export const SpeechIcon = styled.img`
    width: 25px;
    height: auto;
    margin-bottom: 10px;
`;

export const SpeechText = styled(ParagraphS)`
    text-align: left;
    font-style: italic;
    margin-bottom: 15px;
    font-size: ${sizes.sizeS};
    color: ${colors.grey};
    font-weight: 300;
`;

export const SpeechCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 80px auto 0 auto;
`;

export const SpeechName = styled.p`
    text-align: left;
    font-size: ${sizes.sizeXS};
`;
