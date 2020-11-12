import React from 'react';
import { 
    ContainerColor, 
    WrapperColumn, 
    TitleLeft 
} from '../reusable/styled';
import { 
    QuestionsContainer,
    QuestionsRow,
    QuestionsIcon,
    QuestionsText
} from './Questions.elements';

function Questions() {
    return (
        <ContainerColor>
            <WrapperColumn>
                <TitleLeft>Q&A</TitleLeft>
                <QuestionsContainer>
                    <QuestionsRow>
                        <QuestionsIcon src="/images/icons/plus.svg" />   
                        <QuestionsText>zde bude question</QuestionsText>
                    </QuestionsRow>
                    <QuestionsRow>
                        <QuestionsIcon src="/images/icons/plus.svg" />   
                        <QuestionsText>zde bude další a další question</QuestionsText>
                    </QuestionsRow>
                </QuestionsContainer>

            </WrapperColumn>
        </ContainerColor>
    )
}

export default Questions;
