import React, {useState} from 'react';

import { 
    TitleHomeContainer,
    ImgHomeContainer,
    HeroHomeImg,
    SubTitle,
    CarouselHero,
    TitleLeftHome,
    AnimationText,
    CarouselText,
    FirstTitleRow,
    TitleCont
 } from './HeroHome.elements';

import styled from '../reusable/styled'
import { Container, Wrapper } from '../reusable/styled';
import  ButtonInputGroup from '../reusable/ButtonInputGroup/ButtonInputGroup';
import {heroHomeArr} from './heroHomeArr';

import Carousel, { consts } from 'react-elastic-carousel';



function HeroHome( {img}) {
    return (
            <Container lightblue>
                <Wrapper>
                    <TitleHomeContainer>
                        <TitleCont>
                            <FirstTitleRow>
                                <TitleLeftHome >Zapoj se do </TitleLeftHome>
                                <CarouselText showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={false} autoPlaySpeed={1000} verticalMode={true} itemPosition={consts.START} itemPadding={[0, 0]} >
                                    <AnimationText>Komunity</AnimationText>
                                    <AnimationText>Workshopu</AnimationText>
                                    <AnimationText>Webináře</AnimationText>
                                    <AnimationText>Mentoringu</AnimationText>
                                    <AnimationText>Akademie</AnimationText>
                                    <AnimationText>Meetupu</AnimationText>
                                </CarouselText>
                            </FirstTitleRow>
                            <TitleLeftHome >a nauč se programovat</TitleLeftHome>
                            <TitleLeftHome >v Reactu!</TitleLeftHome>
                        </TitleCont>
                        <SubTitle >#ReactGirlsPrague</SubTitle>
                        <ButtonInputGroup />
                    </TitleHomeContainer>
                    <CarouselHero showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={true} autoPlaySpeed={1000}>
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