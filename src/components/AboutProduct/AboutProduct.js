import React from 'react';
import { Container, WrapperColumn, TitleCenter } from '../reusable/styled';
import { ItemContainer, ItemRow, ItemIcon, ItemText } from './AboutProduct.elements';

function AboutProduct({data}) {
    return (
        <Container >
            <WrapperColumn>
                <TitleCenter>Co děláme</TitleCenter>
                <ItemContainer>                  
                    {data.map((item) => {
                        return(
                        <ItemRow data={data}>
                            <ItemIcon src="/images/blue logo_cut.svg" />
                            <ItemText>{item.text}</ItemText>
                        </ItemRow>
                        )
                    })
                    } 
                </ItemContainer>
            </WrapperColumn>
        </Container>
    )
}

export default AboutProduct
