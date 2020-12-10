import React from 'react';
import { ThanksText } from './Thanks.elements';
import { Container } from '../reusable/styled';

function Thanks() {
    return (
        <Container lightBlue>
                <ThanksText>Poděkování patří především naším sponzorům, bez kterých by to nešlo</ThanksText>
        </Container>
    )
}

export default Thanks;
