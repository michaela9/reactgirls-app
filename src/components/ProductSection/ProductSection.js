import React from 'react';

import { 
    ProductTitle,
    ProductInfoContainer,
    ProductInfoTitle,
    ProductInfo,
    ProductImg,
    Wrapper,
    WrapperReverse
 } from './ProductSection.elements';

import { Container, ContainerColor, Button, ButtonContainer } from '../../globalStyles';


function ProductSection() {
    return (
        <>
            <ContainerColor>
                <ProductTitle>
                    Co je ReactGirls Prague?
                </ProductTitle>
            </ContainerColor>
            <Container>
                <Wrapper> 
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Komunita
                        </ProductInfoTitle>
                        <ProductInfo>
                        ReactGirls je komunita lidí, které spojuje láska k technologiím a programování. Komunita nejen pro ženy, které se chtějí stát programátorkami za vedení profesionálních lektorů a programátorů. Zapojte se do naší komunity na Slacku a na sociálních sítích.

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_19.jpg'} />
                </Wrapper>
            </Container>
            <ContainerColor>
                <WrapperReverse>
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Workshopy
                        </ProductInfoTitle>
                        <ProductInfo>
                        Pořádáme pravidelné workshopy programování v Reactu. Naučíme Vás základy programování v HTML, CSS, JavaScriptu a Reactu. Další workshop momentálně připravujeme, aby Vám neuniklo jeho otevření sledujte Newsletter

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_51.jpg'} />
                </WrapperReverse>
            </ContainerColor>
            <Container>
                <Wrapper>
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Webináře
                        </ProductInfoTitle>
                        <ProductInfo>
                        Pořádáme webináře související s programováním v Reactu, soft témata o práci a rekvalifikaci v IT. Některé z webinářů je možné shlédnout na našem Youtube. O dalších se dozvíte v Newsletteru a na sociálních sítích.

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_12.jpg'} />
                </Wrapper>
            </Container>
            <ContainerColor>
                <WrapperReverse>
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Mentoring
                        </ProductInfoTitle>
                        <ProductInfo>
                        Spustili jsme pro Vás projekt mentoring jeden na jednoho (mentor, mentee).  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream. 

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_8.jpg'} />
                </WrapperReverse>
            </ContainerColor>
            <Container>
                <Wrapper>
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Akademie
                        </ProductInfoTitle>
                        <ProductInfo>
                        Připravujeme pro Vás akademii, kde se budeme intenzivně věnovat frontednovému programování HTML, CSS, JavaScript a React.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream. 

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_5.jpg'} />
                </Wrapper>
            </Container>
            <ContainerColor>
                <WrapperReverse>
                    <ProductInfoContainer>
                        <ProductInfoTitle>
                            Meetupy
                        </ProductInfoTitle>
                        <ProductInfo>
                        Pořádáme pro Vás pravidlené Reactgirls meetupy s názvem Reactgirls Beer se zajímavými osobnostmi.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.

                        </ProductInfo>
                    </ProductInfoContainer>
                    <ProductImg src={'images/community/photo_14.jpg'} />
                </WrapperReverse>
            </ContainerColor>
   
        </>
    )
}

export default ProductSection
