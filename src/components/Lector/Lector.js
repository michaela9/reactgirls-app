import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { 
    CardsContainer,
    Card,
    LectorImg,
    LectorName,
    LectorJob,
    LectorLink,
    LectorImgContainer,
    IconIn,
    SliderLector,
    WrapperLector,
    LeftArrow,
    RightArrow
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, Wrapper, TitleCenter } from '../../components/reusable/styled';

function Lector({ deviceType }) {  
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: (
            <div>
              <div className="next-slick-arrow"> <RightArrow src="/images/icons/right-arrow.svg" /> </div>
            </div>
          ),
          prevArrow: (
            <div>
              <div className="prev-slick-arrow"> <LeftArrow src="/images/icons/left-arrow.svg" /> </div>
            </div>
          ),
        responsive: [
            {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1120,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
                }
            }
        ]
        }
     
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
                    <SliderLector  {...settings}>
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
                    </SliderLector>           
                </CardsContainer>                        
            </Container>
        </>
    )
}

export default Lector;


