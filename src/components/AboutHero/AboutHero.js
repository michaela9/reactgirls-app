import React from 'react'
import { Container } from '../reusable/styled';
import { SubTitleAbout, ButtonAbout } from './AboutHero.elements';
import { WrapperAbout, AboutText, AboutTitle } from '../reusable/AboutInfo/AboutInfo.elements';

function AboutHero({title, text1, text2, lightBlue }) {
    return (
        <Container lightBlue={lightBlue}>
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
