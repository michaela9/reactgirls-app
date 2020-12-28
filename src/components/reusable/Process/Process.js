import React from 'react';
import { 
    Container, 
    Wrapper, 
    TitleCenter,
} from '../styled';

import {
    ProcessContainer,
    ProcessRow,
    ProcessNumber,
    ProcessPoint,
    ProcessCont,
    ProcessHeading,
    ProcessInfo,
    ProcessGraphic,
    ProcessLine
} from './Process.elements';

function Process() {
    return (
        <Container lightBlue>
            <Wrapper>
                <TitleCenter>Jak probíhá přihlašování?</TitleCenter>
                    <ProcessContainer>
                        <ProcessRow>
                            <ProcessNumber>1</ProcessNumber>
                            <ProcessGraphic>
                                <ProcessPoint/>
                                <ProcessLine/>
                            </ProcessGraphic>
                            <ProcessCont>
                                <ProcessHeading>MÁM ZÁJEM</ProcessHeading>
                                <ProcessInfo>Klikni na tlačítko Mám zájem</ProcessInfo>
                            </ProcessCont>
                        </ProcessRow>
                    </ProcessContainer>
            </Wrapper>
        </Container>
    )
}

export default Process
