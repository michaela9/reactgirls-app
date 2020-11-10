import styled from 'styled-components';
import { sizes, colors } from '../../variables';

export const ReferenceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const ReferenceTitle = styled.h1`
    text-align: center;
    font-size: ${sizes.sizeXXXL} ;
    font-weight: 900;
    margin: 0 auto;
`;
export const ReferenceArrow = styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    top: 200px;

`;
export const SpeechContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 0;
    margin-left: 15px;
    position: relative;
    left: 20px;
`;
export const SpeechImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    position: absolute;
    left: -20px;
`;
export const Speech = styled.div`
    background-color: ${colors.white};
    border-radius: 30px;
    padding: 15px 30px 15px 60px;
    width: 80%;
    box-shadow: 0px 2px 5px rgba(68, 68, 68, 0.2) inset;



`;
export const SpeechIcon = styled.img`
    width: 25px;
    height: auto;
    margin-bottom: 10px;

`;
export const SpeechText = styled.p`
    text-align: left;
    font-style: italic;
    margin-bottom: 15px;
`;
export const ReferenceContent = styled.div`
    display: flex;


`;

export const SpeechName = styled.p`
    text-align: left;
`;


