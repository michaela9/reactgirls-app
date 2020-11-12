import React from 'react';
import { NewsletterContainer, ParagraphCenter} from './Newsletter.elements';

import { Container, Wrapper, TitleCenter } from '../../components/reusable/styled';
import ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';

function Newsletter() {
    return (
        <Container>
            <Wrapper>
            <NewsletterContainer>
                <TitleCenter>
                    Zajímá Tě, kdy se bude konat další akce?
                </TitleCenter>
                <ParagraphCenter>
                    Klikni na Odebírat Newsletter <br></br> a my se Ti ozveme!
                </ParagraphCenter>
                <ButtonInputGroup />
            </NewsletterContainer>
            </Wrapper>
        </Container>
    )
}

export default Newsletter;
