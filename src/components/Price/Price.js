import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleCenter,
} from '../reusable/styled';

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
                        590,-
                    </PriceArea>
                    <PriceContainer>                  
                    {data.map((item) => {
                        return(
                        <PriceRow data={data}>
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
