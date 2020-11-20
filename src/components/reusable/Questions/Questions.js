import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleCenter 
} from '../../reusable/styled';
import { 
    QuestionsContainer,
    QuestionsContent,
    QuestionsIcon,
    QuestionsText,
    AnswerText,
    QuestionCont
} from './Questions.elements';

function Questions({data}) {
    return (
        <Container lightblue>
            <WrapperColumn>
                <TitleCenter>Q&A</TitleCenter>
                <QuestionsContainer>
                    {data.map((item) => {
                    return (
                        <QuestionCont data={data}>
                            <QuestionsIcon src="/images/icons/plus.svg" />  
                            <QuestionsContent>  
                                <QuestionsText>{item.question}</QuestionsText>
                                <AnswerText>{item.answer}</AnswerText>
                            </QuestionsContent>
                        </QuestionCont>
                    )
                })}
                </QuestionsContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Questions;
