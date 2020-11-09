import React from 'react';
import { Title, SubTitle, TitleContainer} from './Newsletter.elements';

import { Container, Wrapper } from '../../components/reusable/styled';
import ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';

function Newsletter() {
    return (
        <Container>
            <Wrapper>
            <TitleContainer>
                <Title>
                    Zajímá Tě, kdy se bude konat další akce?
                </Title>
                <SubTitle>
                    Klikni na Odebírat Newsletter <br></br> a my se Ti ozveme!
                </SubTitle>
                <ButtonInputGroup />
            </TitleContainer>
            </Wrapper>
        </Container>
    )
}

export default Newsletter;
