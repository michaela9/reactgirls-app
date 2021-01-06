import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { 
    HeroHomeRow, 
    HeroHomeColumn,
    ImgHomeContainer,
    HeroHomeImg,
    SubTitle,
    CarouselHero,
    TextWrapperHome,
    AnimationText,
    CarouselText,
    HeadingHome,
    TitleLeftHome,
    FirstHomeRow
 } from './HeroHome.elements';

import { Container, Wrapper } from '../reusable/styled';
import {animationText, heroHomeArr} from './heroHomeArr';

import { consts } from 'react-elastic-carousel';
import Newsletter from '../reusable/Newsletter/Newsletter';



function HeroHome( {img}) {
    const toggleHome = () => {
        scroll.scrollToTop()
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

      };
    return (
            <Container lightBlue>
                <Wrapper>
                    <HeroHomeRow>
                        <HeroHomeColumn>
                            <TextWrapperHome>
                                <HeadingHome>
                                    <FirstHomeRow>
                                        <TitleLeftHome>
                                            Zapoj se do
                                        </TitleLeftHome>
                                        <CarouselText showArrows={false} itemsToShow={1} itemsToScroll={1} enableAutoPlay={true} pagination={false} autoPlaySpeed={3000} verticalMode={true} itemPosition={consts.START} itemPadding={[0, 0]} >
                                        {animationText.map((text) => {
                                        return (
                                            <Link to={text.id}
                                            smooth={true}
                                            duration={text.duration}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                            >
                                                <AnimationText >{text.text}</AnimationText>
                                            </Link>
                                        )
                                    })}   
                                        </CarouselText>
                                    </FirstHomeRow>
                                    <TitleLeftHome>
                                    a nauč se programovat
                                    </TitleLeftHome>
                                    <TitleLeftHome> v Reactu!
                                    </TitleLeftHome>     
                                </HeadingHome>
                                <SubTitle >#ReactGirlsPrague</SubTitle>
                                <Newsletter id="newsletterHero" /> 
                            </TextWrapperHome>
                        </HeroHomeColumn>
                        <HeroHomeColumn>
                        <Slider {...settings}>
                            {heroHomeArr.map((item) => { 
                            return (
                                <ImgHomeContainer key={item.id} >
                                        <HeroHomeImg src={item.img} />
                                </ImgHomeContainer>
                                )
                            })}
                        </Slider>
                        </HeroHomeColumn>
                    </HeroHomeRow>                           
                </Wrapper>
            </Container>
    )
}

export default HeroHome;