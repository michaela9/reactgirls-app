import React from 'react';
import { Container, Wrapper } from '../reusable/styled';
import { 
    ContactHeroTitle,
    ContactInfo,
    ContactHeroContainer,
    SlackIcon,
} from './ContactHero.elements';

import { Link } from 'react-router-dom';
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
                    <Link to="https://www.slack.com/">
                        <SlackIcon src="/images/icons/slack-color.svg" />
                    </Link>
                    <Newsletter />
                </ContactHeroContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactHero;
