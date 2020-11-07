import React from 'react';

import { 
    LectorTitle,
    CardsContainer,
    Card,
    LectorInterest,
    LectorImg,
    LectorName,
    LectorInfo,
    LectorJob,
    LectorIn,
    LectorWrapper
 } from './Lector.elements';

 import { Container, ContainerColor, Wrapper } from '../../components/reusable/styled';
 import Button from '../../components/reusable/Button/Button';

function Lector() {
    return (
            <ContainerColor>
                <LectorWrapper>
                    <LectorTitle>Lektoři</LectorTitle>
                    <CardsContainer>
                            <Card>
                                <LectorInterest>Workshop | Akademie | Mentoring</LectorInterest>
                                <LectorImg src={'/images/lectors/braňo.jpeg'} />
                                <LectorIn></LectorIn>
                                <LectorName>Branislav Benčík</LectorName>
                                <LectorInfo>
                                    Braňo nás provede kopletními <br /> základy kódování
                                    <br />v HTML a CSS.
                                </LectorInfo>
                                <LectorJob>UX Designer v Applifting Česko</LectorJob>
                            </Card>
                            <Card>  
                                <LectorInterest>Workshop | Akademie </LectorInterest>
                                <LectorImg src={'/images/lectors/zuzkastav-1.png'} />
                                <LectorIn></LectorIn>
                                <LectorName>Zuzana Stavjaňová</LectorName>
                                <LectorInfo>
                                Zuzka si pro Vás připravila lekci Reactu přizpůsobenou začátečníkům.
                                </LectorInfo>
                                <LectorJob>React developer v Sinch s.r.o</LectorJob> 
                            </Card>
                            <Card> 
                            <LectorInterest>Workshop | Akademie</LectorInterest>
                                <LectorImg src={'/images/lectors/richard.jpg'} />
                                <LectorIn></LectorIn>
                                <LectorName>Riki Fridrich</LectorName>
                                <LectorInfo>
                                Riki je guru JavaScriptu a má mnohaleté zkušenosti s přednášením a lektorováním.
                                </LectorInfo>
                                <LectorJob>vývojář v Mall.cz</LectorJob>    
                            </Card>
                    </CardsContainer>
                </LectorWrapper>
            </ContainerColor>
    )
}

export default Lector;

