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
    FirstHomeRow,
    SliderImg,
    SliderText,
    SubtitleHero
    
 } from './HeroHome.elements';

import { Container, Wrapper } from '../reusable/styled';
import {animationText, heroHomeArr} from './heroHomeArr';

import { consts } from 'react-elastic-carousel';
import Newsletter from '../reusable/Newsletter/Newsletter';



function HeroHome( {img}) {
    const toggleHome = () => {
        scroll.scrollToTop()
    };
    const settingsImg = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="slickCustomDots">
            </div>
            )
      };

      const settingsText = {
        vertical: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        
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
                                        <SliderText {...settingsText}>
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
                                        </SliderText>
                                    </FirstHomeRow>
                                    <TitleLeftHome>
                                    a nauč se programovat
                                    </TitleLeftHome>
                                    <TitleLeftHome> v Reactu!
                                    </TitleLeftHome>     
                                </HeadingHome>
                            <SliderImg className="hideDesktop" {...settingsImg}> 
                            {heroHomeArr.map((item) => { 
                            return ( 
                                <ImgHomeContainer key={item.id} >
                                        <HeroHomeImg src={item.img} />
                                </ImgHomeContainer>
                                
                                )
                            })}
                       </SliderImg>
                               
                                <SubtitleHero >#ReactGirlsPrague</SubtitleHero>
                                <Newsletter id="newsletterHero" /> 
                            </TextWrapperHome>
                        </HeroHomeColumn>
                        <HeroHomeColumn>
                      <SliderImg className="hideMobile" {...settingsImg}> 
                            {heroHomeArr.map((item) => { 
                            return ( 
                                <ImgHomeContainer key={item.id} >
                                        <HeroHomeImg src={item.img} />
                                </ImgHomeContainer>
                                
                                )
                            })}
                       </SliderImg>
                        </HeroHomeColumn>
                    </HeroHomeRow>                           
                </Wrapper>
            </Container>
    )
}

export default HeroHome;