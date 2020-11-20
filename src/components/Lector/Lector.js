import React from 'react';

import { 
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
    LectorCompany
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, WrapperColumn, TitleCenter } from '../../components/reusable/styled';

function Lector() {
    return (
        <>
            <Container lightblue>
                <WrapperColumn>   
                    <TitleCenter>Lektoři</TitleCenter>
                </WrapperColumn>  
            </Container>
            <Container>
            <LectorWrapper>
                    <CardsContainer>
                    <LectorArrow src='/images/icons/left-arrow.svg' />
                        {lectorArr.map((lector) => (
                                <Card>
                                    <LectorInterest>{lector.lectorInterest}</LectorInterest>
                                    <LectorImgContainer>
                                        <LectorImg src={lector.lectorImg} />
                                        <LectorLink to="{lector.lectorLinkedIn}"><IconIn src="/images/icons/linkedIn_white.svg" /></LectorLink>
                                    </LectorImgContainer>
                                    <LectorName>{lector.lectorName}</LectorName>
                                    <LectorInfo>{lector.lectorInfo}</LectorInfo>
                                    <LectorJob>{lector.lectorJob} {lector.lectorCompany}</LectorJob>
  
                                </Card>
                            )
                        )}
                    <LectorArrow src='/images/icons/right-arrow.svg' />
                    </CardsContainer>
                </LectorWrapper>  
            </Container>
            </>
    )
}

export default Lector;

