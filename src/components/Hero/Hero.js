import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubTitle,
 } from './Hero.elements';

import { ContainerColor, Wrapper, TitleLeft } from '../../components/reusable/styled.js';
import  ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';
import { Link } from 'react-router-dom';


function Hero() {
    return (
            <ContainerColor>
                <Wrapper>
                    <TitleContainer>
                        <TitleLeft>Zapoj se do Mentoringu <br />a nauč se programovat v Reactu!</TitleLeft>
                        <SubTitle>#ReactGirlsPrague</SubTitle>
                        <ButtonInputGroup />
                    </TitleContainer>
                    <ImgContainer>
                        <HeroImg />
                    </ImgContainer>

                </Wrapper>

            </ContainerColor>
    )
}

export default Hero;
