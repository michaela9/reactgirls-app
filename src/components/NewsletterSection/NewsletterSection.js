import React from 'react';
import { Title, SubTitle, NewsletterContainer, TitleContainer} from './NewsletterSection.elements';

import { Container, ContainerColor, Button, ButtonContainer } from '../../globalStyles';


function NewsletterSection() {
    return (
        <NewsletterContainer>
            <TitleContainer>
                <Title>
                    Zajímá Tě, kdy se bude konat další akce?
                </Title>
                <SubTitle>
                    Klikni na Odebírat Newsletter <br></br> a my se Ti ozveme!
                </SubTitle>
                <ButtonContainer>
                    <Button>user@gmail.com</Button>
                    <Button>ODEBÍREJ NEWSLETTER</Button>
                </ButtonContainer>
            </TitleContainer>
        </NewsletterContainer>
    )
}

export default NewsletterSection
