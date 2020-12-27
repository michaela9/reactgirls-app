import styled from 'styled-components';
import { colors, sizes } from '../../../variables';
import { ParagraphS, Container } from '../../reusable/styled';

export const QuestionsContainer = styled.div`
    max-width: 650px;
    width: 70%;
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;


    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const QuestionCont = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const QuestionsContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;

`;

export const QuestionsIcon = styled.img`
    height: 22px;
    cursor: pointer;
    position: relative;
    top: 3px;
`;

export const ContainerQuestion = styled(Container)`
    height:750px;
`

export const QuestionsText = styled.div`
    margin-left: 15px;
    margin-bottom: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${colors.mainBlue};
    padding: 4px;
    @media only screen and (max-width: 768px) {
        text-align: left;
    }
`;

export const AnswerText = styled(ParagraphS)`
    margin-left: 15px;
    color: ${colors.grey};
    font-weight: 300;
    padding: 4px;
    a{
        font-size: ${sizes.sizeS};
        color: ${colors.mainBlue};
        font-weight: 500;
    //font-family: 'Fira Sans', sans-serif;
     cursor: pointer; 
    }
`;



    