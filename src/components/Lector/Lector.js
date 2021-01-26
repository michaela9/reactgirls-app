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
    CarouselLector,
    WrapperLector
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, Wrapper, TitleCenter } from '../../components/reusable/styled';
  


function Lector() {
    const breakPoints = [
        { width: 200, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 800, itemsToShow: 3 },
      ];
    return (
        <>
            <Container lightBlue>
                <Wrapper>
                    <WrapperLector>
                        <TitleCenter>Lektoři</TitleCenter>
                    </WrapperLector>  
                </Wrapper>  
            </Container>
            <Container  >
                <CardsContainer>  
                <CarouselLector breakPoints={breakPoints}  itemsToScroll={1} enableAutoPlay={false}  pagination={false}  >
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


