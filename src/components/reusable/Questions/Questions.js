import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleCenter 
} from '../../reusable/styled';
import Accordion from './Accordion';
import { 
    QuestionsContainer,
} from './Questions.elements';

function Questions({data}) {
    return (
        <Container lightBlue>
            <WrapperColumn>
                <TitleCenter>Q&A</TitleCenter>
                <QuestionsContainer>
                    {data.map((item) => {
                    return (
                        <Accordion 
                            question={item.question}
                            answer={item.answer}
                        />
                    )
                    })}
                </QuestionsContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Questions;
