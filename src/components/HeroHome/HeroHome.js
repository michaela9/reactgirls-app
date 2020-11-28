import React, {useState} from 'react';

import { 
    TitleHomeContainer,
    ImgHomeContainer,
    HeroHomeImg,
    SubTitle,
    CarouselHero
 } from './HeroHome.elements';

import styled from '../reusable/styled'
import { Container, Wrapper, TitleLeft } from '../reusable/styled';
import  ButtonInputGroup from '../reusable/ButtonInputGroup/ButtonInputGroup';
import {heroHomeArr} from './heroHomeArr';



function HeroHome( {img}) {
    return (
            <Container lightblue>
                <Wrapper>
                    <TitleHomeContainer>
                        <TitleLeft >"Zapoj se do Mentoringu a nauč se programovat v Reactu!"</TitleLeft>
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