import React from 'react';
import { NewsletterContainer, ParagraphCenter, TitleCenterNews} from './Newsletter.elements';

import { Container, Wrapper } from '../../components/reusable/styled';
import ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';

function Newsletter() {
    return (
        <Container>
            <Wrapper>
            <NewsletterContainer>
                <TitleCenterNews>
                    Zajímá Tě, kdy se bude konat další akce?
                </TitleCenterNews>
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
