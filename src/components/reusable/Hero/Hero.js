import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    HeroImg,
    SubTitle,
 } from './Hero.elements';

import { Container, Wrapper, TitleLeft, Button } from '../styled';
import  ButtonInputGroup from '../ButtonInputGroup/ButtonInputGroup';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


function Hero({
    title,
    subtitle,
    buttonText,
    img,
} ) {
    return (
            <Container lightblue>
                <Wrapper>
                    <TitleContainer>
                        <TitleLeft > {title} </TitleLeft>
                        <SubTitle > {subtitle} </SubTitle>
                        <ButtonInputGroup />
                    </TitleContainer>
                    <ImgContainer>
                        <HeroImg src={img} />

                    </ImgContainer>

                </Wrapper>

            </Container>
    )
}

export default Hero;
