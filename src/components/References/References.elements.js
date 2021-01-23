import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../variables';
import { ParagraphS } from '../reusable/styled';

export const ReferenceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px;
    @media only screen and (max-width: ${breakpoints.tablet} ) {
        padding: 60px 16px; 
    }
`;

export const Speech = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: ${breakpoints.tablet} ) {
        margin-top: 60px;
        margin-bottom: 0px;
    }
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
    font-weight: 300;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        margin-bottom: 15px;
        font-size: ${sizes.sizeXS};
    }
`;

export const SpeechNameContainer = styled.div`
    display: flex;
    align-items: center;

`;

export const SpeechImgContainer = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    overflow: hidden;
    //margin-bottom: 15px;
    //margin: 0 auto;
    margin-right: 15px;

`;

export const SpeechImg = styled.img`
    width: 70px;
    object-fit: cover;
`;

export const SpeechCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 80px auto 0 auto;
    justify-content: center;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        width: 90%; 
        margin: 0 auto 0 auto;
    }
`;

export const SpeechName = styled(ParagraphS)`
    text-align: left;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: ${breakpoints.tablet} ) {
        font-size: 13px;
    }
`;
