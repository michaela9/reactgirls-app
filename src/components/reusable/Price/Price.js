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

function Price({mainPriceTitle, data}) {
    return (
        <Container>
            <WrapperColumn>
                <TitleCenter>{mainPriceTitle}</TitleCenter>
                <PriceRectangle>
                    <PriceArea>
                        590 CZK
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
                    <ButtonPrice >MÁM ZÁJEM</ButtonPrice>
                </PriceContainer> 
                </PriceRectangle>  
            </WrapperColumn>
        </Container>
    )
}

export default Price;
