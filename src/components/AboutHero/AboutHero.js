import React from 'react'
import { Container, TitleLeft } from '../reusable/styled';
import { SubTitleAbout, ButtonAbout } from './AboutHero.elements';
import { WrapperAbout, AboutText, AboutTitle } from '../reusable/AboutInfo/AboutInfo.elements';





function AboutHero({title, text1, text2, lightblue }) {
    return (
        <Container lightblue={lightblue}>
            <WrapperAbout>
                    <AboutTitle>{title}</AboutTitle>
                    <AboutText>{text1}</AboutText>
                    <AboutText>{text2}</AboutText>
                    <SubTitleAbout>#ReactGirls Prague</SubTitleAbout>
                    <ButtonAbout>KONTAKT</ButtonAbout>
            </WrapperAbout>
         
        </Container>
    )
}


export default AboutHero;
