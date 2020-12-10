import React from 'react';
import { Container } from '../styled';
import { AboutText, WrapperAbout, AboutTitle  } from './AboutInfo.elements';

function AboutInfo({title, text1, text2, lightBlue }) {
    return (
        <Container lightBlue={lightBlue} >
            <WrapperAbout>
                    <AboutTitle>{title}</AboutTitle>
                    <AboutText>{text1}</AboutText>
                    <AboutText>{text2}</AboutText>
            </WrapperAbout>
         
        </Container>
    )
}

export default AboutInfo;

