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
    LectorLink,
    LectorImgContainer,
    IconIn,
    LectorArrow,
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, ContainerColor, Wrapper } from '../../components/reusable/styled';
 import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Lector() {
    return (
        <>
            <ContainerColor>
                <Wrapper>   
                    <LectorTitle>Lektoři</LectorTitle>
                </Wrapper>  
            </ContainerColor>
            <Container>
            <LectorWrapper>
                    <CardsContainer>
                    <LectorArrow src='/images/icons/left-arrow.svg' />
                        {lectorArr.map((lector) => {

                            return (
                                <Card>
                                    <LectorInterest>{lector.lectorInterest}</LectorInterest>
                                    <LectorImgContainer>
                                        <LectorImg src={lector.lectorImg} />
                                        <LectorLink to="{lector.lectorLinkedIn}"><IconIn src="/images/icons/linkedIn.svg" /></LectorLink>
                                    </LectorImgContainer>
                                    <LectorName>{lector.lectorName}</LectorName>
                                    <LectorInfo>{lector.lectorInfo}</LectorInfo>
                                    <LectorJob>{lector.lectorJob}</LectorJob>
                                </Card>
                            )
                        }    
                    )}
                    <LectorArrow src='/images/icons/right-arrow.svg' />
                    </CardsContainer>
                </LectorWrapper>  
            </Container>
            </>
    )
}

export default Lector;

