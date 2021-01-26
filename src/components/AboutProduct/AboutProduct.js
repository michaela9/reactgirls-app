import React from 'react';
import { Container, Wrapper, TitleCenter } from '../reusable/styled';
import { ItemContainer, ItemRow, ItemIcon, ItemText, AboutText, WrapperAbout } from './AboutProduct.elements';

function AboutProduct({data}) {
    return (
        <>
        <Container lightBlue >
            <Wrapper>
                <WrapperAbout>
                    <TitleCenter>Co děláme</TitleCenter>
                    <AboutText>Pomáháme ženám objevovat svět webdesignu. Kromě akademie, workshopů a mentoringového programu pořádáme webináře na nejrůznější témata. Společně pořádáme meetupy, kde se mohou účastnící s lektory lépe poznat.</AboutText>
                        <ItemContainer>                  
                            {data.map((item) => {
                                return(
                                <ItemRow key={item.text} data={data}>
                                    <ItemIcon src="/images/blue logo_cut.svg" />
                                    <ItemText>{item.text}</ItemText>
                                </ItemRow>
                                )
                            })
                            } 
                        </ItemContainer>
                 </WrapperAbout>
            </Wrapper>
        </Container>
        </>
    )
}

export default AboutProduct
