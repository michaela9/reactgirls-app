import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    ImgTitle,
    Title,
    SubTitle,
 } from './Hero.elements';

import { ContainerColor, Wrapper } from '../../components/reusable/styled.js';
import  Button from '../../components/reusable/Button/Button';
import  Input from '../../components/reusable/Input/Input';
import  ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';


function Hero() {
    return (
              <ContainerColor>
                <Wrapper>
                    <TitleContainer>
                        <Title>Zapoj se do Mentoringu <br />a nauč se programovat v Reactu!</Title>
                        <SubTitle>#ReactGirlsPrague</SubTitle>
                        <ButtonInputGroup />
                    </TitleContainer>
                    <ImgContainer>
                        <ImgTitle />
                    </ImgContainer>
                </Wrapper>
              </ContainerColor>
    )
}

export default Hero;
