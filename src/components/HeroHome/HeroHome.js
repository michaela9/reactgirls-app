import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

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
import {animationText, heroHomeArr} from './heroHomeArr';

import { consts } from 'react-elastic-carousel';
import Newsletter from '../reusable/Newsletter/Newsletter';



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
                                {animationText.map((text) => {
                                    return (
                                        <AnimationText id={text.id}>{text.text}</AnimationText>
                                    )
                                })}
                                    
                                </CarouselText>
                            </FirstTitleRow>
                            <TitleLeftHome >a nauč se programovat</TitleLeftHome>
                            <TitleLeftHome >v Reactu!</TitleLeftHome>
                        </TitleCont>
                        <CarouselHero showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={true} autoPlaySpeed={3000}>
                    {heroHomeArr.map((item) => { 
                     return (
                        <ImgHomeContainer key={item.id} >
                        <Link to={item.id}
                         smooth={true}
                         duration={item.duration}
                         spy={true}
                         exact='true'
                         offset={-80}
 
                         >
                            <HeroHomeImg src={item.img} />
                        </Link>
                        </ImgHomeContainer>
                        )
                    })}
                    </CarouselHero>
                        <SubTitle >#ReactGirlsPrague</SubTitle>
                        <Newsletter id="newsletterHero" />
                    </TitleHomeContainer>
                    
                </Wrapper>
            </Container>
    )
}

export default HeroHome;