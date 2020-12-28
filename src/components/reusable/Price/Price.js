import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleCenter,
} from '../styled';

import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    ButtonPrice,
    PriceRectangle,
    PriceArea
} from './Price.elements';

function Price() {
    return (
        <Container>
            <WrapperColumn>
                <TitleCenter>co vše je v cene</TitleCenter>
                <PriceRectangle>
                    <PriceArea>
                        590 CZK
                    </PriceArea>
                    <PriceContainer>                  

                        <PriceRow >
                            <PriceIcon src="/images/icons/done.svg" />
                            <PriceText>blblb</PriceText>
                        </PriceRow>
  
                    <ButtonPrice >MÁM ZÁJEM</ButtonPrice>
                </PriceContainer> 
                </PriceRectangle>  
            </WrapperColumn>
        </Container>
    )
}

export default Price;
