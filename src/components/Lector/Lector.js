import React from 'react';

import { 
    LectorTitle,
    CardsContainer,
    Card,
    LectorWrapper,
    LectorInterest,
    LectorImg,
    LectorName,
    LectorInfo,
    LectorJob,
    LectorIn,
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, ContainerColor, Wrapper } from '../../components/reusable/styled';

function Lector() {
    return (
            <ContainerColor>
                <LectorWrapper>
                    <LectorTitle>Lektoři</LectorTitle>
                    <CardsContainer>
                        {lectorArr.map(lector => <Card>
                            <LectorInterest>{lectorArr.lectorInterest}</LectorInterest>
                            <LectorImg src={lectorArr.lectorImg} />
                            <LectorIn></LectorIn>
                            <LectorName>{lectorArr.lectorName}</LectorName>
                            <LectorInfo>{lectorArr.lectorInfo}</LectorInfo>
                            <LectorJob>{lectorArr.lectorJob}</LectorJob>
                    </Card>
                    )}
                    </CardsContainer>
                </LectorWrapper>
            </ContainerColor>
    )
}

export default Lector;

