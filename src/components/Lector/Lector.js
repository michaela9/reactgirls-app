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

 import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


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
                            <Carousel breakpoints={breakPoints}  >
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
                                </Carousel>      
                        </CardsContainer>         
                </LectorWrapper>  
            </Container>
            </>
    )
}

export default Lector;

