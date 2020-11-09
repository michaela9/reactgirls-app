import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    ImgTitle,
    Title,
    SubTitle,
    Social,
    SocialIcon
 } from './Hero.elements';

import { ContainerColor, Wrapper } from '../../components/reusable/styled.js';
import  Button from '../../components/reusable/Button/Button';
import  Input from '../../components/reusable/Input/Input';
import  ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';
import { Link } from 'react-router-dom';


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
                    <Social>
                        <Link to="https://www.facebook.com/">
                            <SocialIcon src="/images/icons/facebook.svg" />
                        </Link>
                        <Link to="https://www.linkedin.com/">
                            <SocialIcon src="/images/icons/linkedIn.svg" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                            <SocialIcon src="/images/icons/instagram.svg" />
                        </Link>
                        <Link to="https://www.youtube.com/">
                            <SocialIcon src="/images/icons/youtube.svg" />
                        </Link>
                        <Link to="https://www.twitter.com/">
                            <SocialIcon src="/images/icons/twitter.svg" />
                        </Link>
                    </Social>
                </Wrapper>

            </ContainerColor>
    )
}

export default Hero;
