import React from 'react';
import { InfoContent } from './Info.elements';
import { Container, Wrapper } from '../reusable/styled';

function Info() {
    return (
        <Container>
            <Wrapper>
                <InfoContent>
                    Přihlaš se do Mentoringu ReactGirls
                     a získej kouče, který Tě bude 
                     mentorovat a rozvíjet Tvé technické dovednosti
                </InfoContent>
            </Wrapper>
        </Container>
    )
}

export default Info;
