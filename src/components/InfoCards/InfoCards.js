import React from 'react';
import { WrapperColumn, ContainerColor, TitleCenter } from '../reusable/styled';
import { 
    InfoCardsContainer,
    InfoCard,
    InfoTitle,
    InfoText,
    InfoIcon,
} from './InfoCards.elements';

import mentoringArr from './mentoringArr';

function InfoCards() {
    return (
            <ContainerColor>
                <WrapperColumn>   
                    <TitleCenter>Co Mentoring nabízí?</TitleCenter>
                    <InfoCardsContainer>
                        {mentoringArr.map((section) => {
                            return (
                                <InfoCard>
                                    <InfoIcon src={section.icon} />
                                    <InfoTitle>{section.title}</InfoTitle>
                                    <InfoText>{section.text}</InfoText>
                                </InfoCard>
                                )
                            }    
                        )}
                    </InfoCardsContainer>
                </WrapperColumn> 
            </ContainerColor>
    )
}


export default InfoCards;
