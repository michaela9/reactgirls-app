import React from 'react';
import { Container, Wrapper, TitleCenter } from '../reusable/styled';
import { WrapperAboutMore, TextAboutMore, AboutMoreArticle, ArticleContainer, AboutMoreLink } from './AboutMore.elements';

function AboutMore() {
    return (
        <Container lightBlue >
            <Wrapper>
                <WrapperAboutMore>
                    <TitleCenter>Zajímá tě víc?</TitleCenter>
                    <TextAboutMore>Sleduj naše sociální sítě a neváhej se nám ozvat! Nejvíce aktivní jsme na Slacku. <br/>
                    Nebo si přečti si <a href="https://medium.com/applifting-cz/programov%C3%A1n%C3%AD-v-koupeln%C4%9B-aneb-jak-jsme-u%C4%8Dili-holky-react-bffdf690731f" target="blank">článek od Zuzky</a> a <a href="https://medium.com/applifting-cz/tereza-va%C5%88kov%C3%A1-chci-aby-programovac%C3%AD-workshopy-pro-holky-nebyly-t%C5%99eba-3162b38f23e2" target="blank">rozhovor s Terkou</a> na medium.com. 
                    </TextAboutMore>
                
                </WrapperAboutMore>
            </Wrapper>
        </Container>
    )
}

export default AboutMore
