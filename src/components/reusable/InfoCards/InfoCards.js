import React from 'react';
import { WrapperColumn, Container, TitleCenter } from '../../reusable/styled';

import InfoCardsContainer from './InfoCardsContainer';

function InfoCards({
    data,
    mainCardsTitle
    }) {
    return (
            <Container lightblue>
                <WrapperColumn>   
                    <TitleCenter>{mainCardsTitle}</TitleCenter>
                    <InfoCardsContainer data={data}  />
                </WrapperColumn> 
            </Container>
            )
}

export default InfoCards;
