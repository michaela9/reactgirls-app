import styled from 'styled-components';
import { colors, sizes } from '../../../variables';
import { ParagraphS } from '../../reusable/styled';

export const QuestionsContainer = styled.div`
    width: 650px;
    padding: 40px;
    border-radius: 20px;
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
export const QuestionsText = styled.div`
    margin-left: 15px;
    margin-bottom: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: 500;
    color: ${colors.mainBlue};
    padding: 4px;
`;

export const AnswerText = styled(ParagraphS)`
    margin-left: 15px;
    color: ${colors.grey};
    font-weight: 300;
    padding: 4px;
`;



    