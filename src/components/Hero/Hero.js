import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    ImgTitle,
    Title,
    SubTitle,
 } from './Hero.elements';

import { ContainerColor, Wrapper } from '../../components/reusable/styled.js';
import  Button from '../../components/reusable/Button';


function Hero() {
    return (
              <ContainerColor>
                <Wrapper>
                    <TitleContainer>
                        <Title>Zapoj se do Mentoringu <br />a nauč se programovat v Reactu!</Title>
                        <SubTitle>#ReactGirlsPrague</SubTitle>
                        <Button>ODEBÍRAT NOVINKY</Button>
                    </TitleContainer>
                    <ImgContainer>
                        <ImgTitle />
                    </ImgContainer>
                </Wrapper>
              </ContainerColor>
    )
}

export default Hero;
