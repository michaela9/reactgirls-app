import React from 'react';
import { Container, Wrapper } from '../reusable/styled';
import { 
    ContactHeroTitle,
    ContactInfo,
    ContactHeroContainer,
    SlackIcon,
} from './ContactHero.elements';

import Newsletter from '../reusable/Newsletter/Newsletter';

function ContactHero() {
    return (
        <Container lightBlue>
            <Wrapper>
                <ContactHeroContainer>
                    <ContactHeroTitle>Jak nás můžeš kontaktovat?</ContactHeroTitle>
                    <ContactInfo>
                        Napiš nám přes Slack, ostatní sociální sítě nebo nás kontaktuj přímo.
                        Můžeš také odebírat náš newsletter a my tě budeme o všem informovat.
                    </ContactInfo>
                    <a href="https://app.slack.com/client/TL2R6BTPA/CL5002YES" target="blank">
                        <SlackIcon src="/images/icons/slack-color.svg" />
                    </a>
                    <Newsletter />
                </ContactHeroContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactHero;
