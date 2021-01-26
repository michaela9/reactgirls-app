import React from 'react'
import { Container } from '../reusable/styled';
import { SubTitleAbout, ButtonAbout, WrapperAbout, AboutText, AboutTitle } from './AboutHero.elements';
import { useTheme, useThemeUpdate } from '../../ThemeContext';


function AboutHero({title, text1, text2 }) {
    const navLogo = useTheme();
    const changeLogoSize = useThemeUpdate();
    return (
        <Container >
            <WrapperAbout className={navLogo ? 'active' : ''}>
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
