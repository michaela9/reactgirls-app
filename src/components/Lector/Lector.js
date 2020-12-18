import React from 'react';

import { 
    CardsContainer,
    Card,
    LectorImg,
    LectorName,
    LectorJob,
    LectorLink,
    LectorImgContainer,
    IconIn,
    CarouselLector
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, WrapperColumn, TitleCenter } from '../../components/reusable/styled';
  
function Lector() {
    return (
        <>
            <Container lightBlue>
                <WrapperColumn>   
                    <TitleCenter>Lektoři</TitleCenter>
                </WrapperColumn>  
            </Container>
            <Container  >
                <CardsContainer>  
                <CarouselLector  itemsToShow={3} itemsToScroll={1} enableAutoPlay={false}  pagination={false}  >
                    {lectorArr.map((lector) => (
                                <Card key={lector.lectorName} > 
                                    <LectorImgContainer>
                                        <LectorImg src={lector.lectorImg} />
                                        <LectorLink href={lector.lectorLinkedIn} target="blank" ><IconIn src="/images/icons/linkedIn_white.svg" /></LectorLink>
                                    </LectorImgContainer>
                                    <LectorName>{lector.lectorName}</LectorName>
                                    <LectorJob>{lector.lectorJob}</LectorJob>
                                    <LectorJob>{lector.lectorCompany}</LectorJob>
                                </Card>
                                    )
                                )}
                         </CarouselLector>           
                        </CardsContainer>         
                
            </Container>
        </>
    )
}

export default Lector;


