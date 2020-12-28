import React, { useState } from 'react';
import { 
    Wrapper, 
    TitleCenter 
} from '../../reusable/styled';
import Accordion from './Accordion';
import { 
    QuestionsContainer,
    ContainerQuestion
} from './Questions.elements';

function Questions({ data }) {
    const [indexOpen, setIndexOpen] = useState(0);
    return (
        <ContainerQuestion lightBlue>
            <Wrapper>
                <TitleCenter>Q&A</TitleCenter>
                <QuestionsContainer>
                    {data.map((item, index) => {
                    return (
                        <Accordion 
                            key={item.question}
                            question={item.question}
                            answer={item.answer}
                            open={indexOpen === index}
                            setOpen={() => setIndexOpen(index)}
                        />
                    )
                    })}
                </QuestionsContainer>
            </Wrapper>
        </ContainerQuestion>
    )
}

export default Questions;
