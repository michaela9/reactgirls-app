import React from 'react';

import { 
    TitleContainer,
    ImgContainer,
    ImgTitle,
    Wrapper,
    Title,
    SubTitle,
 } from './InfoSection.elements';

import { Container, ContainerColor, Button, ButtonContainer } from '../../globalStyles';
function InfoSection() {
    return (
        <>
              <ContainerColor>
                <Wrapper>
                    <TitleContainer>
                        <Title>Zapoj se do Mentoringu <br></br>a nauč se programovat <br></br>v Reactu!</Title>
                        <SubTitle>#ReactGirlsPrague</SubTitle>
                        <ButtonContainer>
                            <Button>user@gmail.com</Button>
                            <Button>ODEBÍRAT NEWSLETTER</Button>
                        </ButtonContainer>
                    </TitleContainer>
                    <ImgContainer>
                        <ImgTitle>
                        </ImgTitle>
                    </ImgContainer>
                </Wrapper>
              </ContainerColor>
        </>
    )
}

export default InfoSection;
