import React from 'react';

import { 
    LectorTitle,
    CardsContainer,
    Card,
    LectorWrapper,
    LectorInterest,
    LectorImg,
    LectorName,
    LectorInfo,
    LectorJob,
    LectorLink,
    LectorImgContainer,
    IconIn,
 } from './Lector.elements';

 import lectorArr from './lectorArr';
 import { Container, ContainerColor, Wrapper } from '../../components/reusable/styled';
 import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Lector() {
    return (
            <ContainerColor>
                <LectorWrapper>
                    <LectorTitle>Lektoři</LectorTitle>
                    <CardsContainer>
                        {lectorArr.map((lector) => {

                            return (
                                <Card>
                                <LectorInterest>{lector.lectorInterest}</LectorInterest>
                                <LectorImgContainer>
                                    <LectorImg src={lector.lectorImg} />
                                    <LectorLink to="{lector.lectorLinkedIn}"><IconIn src="/images/icons/linkedIn.svg" /></LectorLink>
                                </LectorImgContainer>
                                <LectorName>{lector.lectorName}</LectorName>
                                <LectorInfo>{lector.lectorInfo}</LectorInfo>
                                <LectorJob>{lector.lectorJob}</LectorJob>
                                </Card>
                            )
                        }    
                    )}
                    </CardsContainer>
                </LectorWrapper>
            </ContainerColor>
    )
}

export default Lector;

