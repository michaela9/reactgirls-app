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
    LectorCompany,
    CarouselLector
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, WrapperColumn, TitleCenter } from '../../components/reusable/styled';

 import ReactDOM from "react-dom";


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
                            <CarouselLector  >
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
                                </CarouselLector>      
                        </CardsContainer>         
                </LectorWrapper>  
            </Container>
            </>
    )
}

export default Lector;

