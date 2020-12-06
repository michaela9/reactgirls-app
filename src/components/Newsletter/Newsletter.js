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
                    Zajímá tě, kdy se bude konat další akce?
                </TitleCenterNews>
                <ParagraphCenter>
                    Klikni na Odebírat Newsletter <br></br> a my se ti ozveme!
                </ParagraphCenter>
                <ButtonInputGroup />
            </NewsletterContainer>
            </Wrapper>
        </Container>
    )
}

export default Newsletter;
