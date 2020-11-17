import React from 'react';
import { 
    Container, 
    WrapperColumn, 
    TitleLeft 
} from '../reusable/styled';
import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    PriceTitle
} from './Price.elements';

function Price() {
    return (
        <Container lightblue>
            <WrapperColumn>
                <PriceTitle>Co vše je v ceně Mentoringu?</PriceTitle>
                <PriceContainer>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>kouč po dobu 3 měsíců</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>pravidelná týdenní setkávání</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>pravidelné zadávání úkolů</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>možnost konzultace s dalšími kouči</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>certifikát o absolvování</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>vstup na celodenní workshop ReactGirls</PriceText>
                    </PriceRow>
                    <PriceRow>
                        <PriceIcon src="/images/icons/done.svg" />
                        <PriceText>možnost vyzkoušet si mock interview</PriceText>
                    </PriceRow>
                </PriceContainer>
            </WrapperColumn>
        </Container>
    )
}

export default Price;
