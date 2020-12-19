import React from 'react';
import { NewsletterContainer, ParagraphCenter, TitleCenterNews} from './Newsletter.elements';
import Newsletter from './Newsletter';
import { Container, Wrapper } from '../styled';

function NewsletterSection() {
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
                <Newsletter />

            </NewsletterContainer>
            </Wrapper>
        </Container>
    )
}

export default NewsletterSection;
