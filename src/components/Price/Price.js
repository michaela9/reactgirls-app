import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleCenter
} from '../reusable/styled';
import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    PriceIconMain
} from './Price.elements';

function Price({mainPriceTitle, data}) {
    return (
        <Container lightblue>
            <WrapperColumn>
                <TitleCenter>{mainPriceTitle}</TitleCenter>
                <PriceContainer>                  
                    <PriceIconMain src="/images/icons/money.svg"/> 
                    {data.map((item) => {
                        return(
                        <PriceRow data={data}>
                            <PriceIcon src="/images/icons/done.svg" />
                            <PriceText>{item.data}</PriceText>
                        </PriceRow>
                        )
                    })
                    } 
                </PriceContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Price;
