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
                        {lectorArr.map((lector) => {

                            return (
                                <Card>
                                <LectorInterest>{lector.lectorInterest}</LectorInterest>
                                <LectorImg src={lector.lectorImg} />
                                <LectorIn></LectorIn>
                                <LectorName>{lector.lectorName}</LectorName>
                                <LectorInfo>{lector.lectorInfo}</LectorInfo>
                                <LectorJob>{lector.lectorJob}</LectorJob>
                                </Card>
                            )
                        }    
                    )}
                    </CardsContainer>
                </LectorWrapper>
            </ContainerColor>
    )
}

export default Lector;

