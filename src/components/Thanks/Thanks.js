import React from 'react';
import { ThanksText, WrapperThanks } from './Thanks.elements';
import { Container, Wrapper } from '../reusable/styled';

function Thanks() {
    return (
        <Container lightBlue>
            <Wrapper>
                <WrapperThanks>
                    <ThanksText>Děkujeme našim partnerům za jejich podporu.</ThanksText>
                </WrapperThanks>
            </Wrapper>
        </Container>
    )
}

export default Thanks;
