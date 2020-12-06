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
                    <PriceIconMain>xxx,-</PriceIconMain>
                    {data.map((item) => {
                        return(
                        <PriceRow data={data}>
                            <PriceIcon src="/images/icons/done.svg" />
                            <PriceText>{item.text}</PriceText>
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
