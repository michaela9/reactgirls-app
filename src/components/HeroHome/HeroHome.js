import React, {useState} from 'react';

import { 
    TitleHomeContainer,
    ImgHomeContainer,
    HeroHomeImg,
    SubTitle,
    CarouselHero,
    TitleLeftHome,
    AnimationText
 } from './HeroHome.elements';

import styled from '../reusable/styled'
import { Container, Wrapper } from '../reusable/styled';
import  ButtonInputGroup from '../reusable/ButtonInputGroup/ButtonInputGroup';
import {heroHomeArr} from './heroHomeArr';



function HeroHome( {img}) {
    return (
            <Container lightblue>
                <Wrapper>
                    <TitleHomeContainer>
                        <TitleLeftHome >Zapoj se do <AnimationText>Mentoringu</AnimationText> a nauč se programovat v Reactu!</TitleLeftHome>
                        <SubTitle >"#ReactGirlsPrague"</SubTitle>
                        <ButtonInputGroup />
                    </TitleHomeContainer>
                    <CarouselHero showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={true} autoPlaySpeed={6000}>
                    {heroHomeArr.map((item) => { 
                     return (
                        <ImgHomeContainer>
                            <HeroHomeImg src={item.img} />
                        </ImgHomeContainer>
                        )
                    })}
                    </CarouselHero>
                </Wrapper>
            </Container>
    )
}

export default HeroHome;