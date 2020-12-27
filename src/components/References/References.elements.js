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
    //color: ${colors.darkGrey};
    font-weight: 400;
`;

export const SpeechCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 80px auto 0 auto;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 80%; 
    }
`;

export const SpeechName = styled(ParagraphS)`
    text-align: left;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    font-weight: 300;
`;
