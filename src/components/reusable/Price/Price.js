import React from 'react';
import { 
    Container, 
    Wrapper, 
    TitleCenter,
} from '../styled';

import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    ButtonPrice,
    PriceRectangle,
    PriceArea,
    PriceWrapper,
} from './Price.elements';

function Price({mainPriceTitle, data, price, form }) {
    return (
        <Container>
            <Wrapper>
                <PriceWrapper>
                    <TitleCenter>{mainPriceTitle}</TitleCenter>
                    <PriceRectangle>
                        <PriceArea>
                            {price}
                        </PriceArea>
                        <PriceContainer>                  
                        {data.map((item) => {
                            return(
                            <PriceRow key={item.text} data={data}>
                                <PriceIcon src="/images/icons/done.svg" />
                                <PriceText>{item.text}</PriceText>
                            </PriceRow>
                            )
                        })
                        } 
                        <ButtonPrice href={form} target="blank" >MÁM ZÁJEM</ButtonPrice>
                    </PriceContainer> 
                    </PriceRectangle> 
                </PriceWrapper> 
            </Wrapper>
        </Container>
    )
}

export default Price;