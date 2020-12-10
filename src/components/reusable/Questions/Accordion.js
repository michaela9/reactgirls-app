import React, { useState } from 'react';
import { 
    QuestionsContent,
    QuestionsIcon,
    QuestionsText,
    AnswerText,
    QuestionCont
} from './Questions.elements';

function Accordion({question, answer}) {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <QuestionCont>
            <QuestionsIcon onClick={() => setIsOpen(!isOpen)} src={isOpen ? "/images/icons/minus.svg" : "/images/icons/plus.svg"}>
            </QuestionsIcon>  
            <QuestionsContent>  
                <QuestionsText>{question}</QuestionsText>
                {isOpen && (
                <AnswerText>{answer}</AnswerText>
                )}
            </QuestionsContent>
        </QuestionCont>
    )
}

export default Accordion
