import React from 'react';
import { WrapperColumn, Container, TitleCenter } from '../reusable/styled';
import {
    StudentTitle,
    StudentContainer,
    StudentCard,
    StudentIcon,
    StudentHeading,
    StudentText,
} from './Student.elements';

function Student() {
    return (
        <Container>
        <WrapperColumn>   
            <TitleCenter>Pro koho je Mentoring určen?</TitleCenter>
            <StudentContainer>
                        <StudentCard>
                            <StudentIcon src='/images/icons/coach.svg' />
                            <StudentHeading>Zájemkyním</StudentHeading>
                            <StudentText>Zájemkyním o programování, které se chtějí naučit tvorbu webových stránek v populární JavaScrtipové knihovně React.</StudentText>
                        </StudentCard>
                        <StudentCard>
                            <StudentIcon src='/images/icons/coach.svg' />
                            <StudentHeading>Začátečnicím</StudentHeading>
                            <StudentText>Začatečnicím, které již mají zkušenosti s programováním a chtěly by je posunout na další úroveň s Reactem.</StudentText>
                        </StudentCard>
                        <StudentCard>
                            <StudentIcon src='/images/icons/coach.svg' />
                            <StudentHeading>Ženám</StudentHeading>
                            <StudentText>Ženám, které se chtějí naučit frontendové programování a nechat se mentorovat osobnostmi z IT.</StudentText>
                        </StudentCard>
            </StudentContainer>
        </WrapperColumn> 
    </Container>
    )
}

export default Student;
