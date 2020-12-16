import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

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

import { Container, Wrapper } from '../reusable/styled';
import  ButtonInputGroup from '../reusable/ButtonInputGroup/ButtonInputGroup';
import {heroHomeArr} from './heroHomeArr';

import { consts } from 'react-elastic-carousel';



function HeroHome( {img}) {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
            <Container lightBlue>
                <Wrapper>
                    <TitleHomeContainer>
                        <TitleCont>
                            <FirstTitleRow>
                                <TitleLeftHome >Zapoj se do </TitleLeftHome>
                                <CarouselText showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={false} autoPlaySpeed={3000} verticalMode={true} itemPosition={consts.START} itemPadding={[0, 0]} >
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
                    <CarouselHero showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={true} autoPlaySpeed={3000}>
                    {heroHomeArr.map((item) => { 
                     return (
                        <ImgHomeContainer>
                        <a href={item.id} onClick={toggleHome}>
                            <HeroHomeImg src={item.img} />
                        </a>
                        </ImgHomeContainer>
                        )
                    })}
                    </CarouselHero>
                </Wrapper>
            </Container>
    )
}

export default HeroHome;