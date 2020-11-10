import React from 'react';
import { ContainerColor, Wrapper } from '../reusable/styled';
import { 
    ContactHeroTitle,
    ContactInfo,
    ContactText,
    ContactHeroContainer,
    SlackIcon,
    ContactTitleContainer
} from './ContactHero.elements';

import { Link } from 'react-router-dom';
import  ButtonInputGroup from '../../components/reusable/ButtonInputGroup/ButtonInputGroup';


function ContactHero() {
    return (
        <ContainerColor>
            <Wrapper>
                <ContactHeroContainer>
                        <ContactHeroTitle>Jak nás můžeš kontaktovat?</ContactHeroTitle>
                        <ContactInfo>Napiš nám přes Slack, ostatní sociální sítě nebo nás kontaktuj přímo.
                            Můžeš také odebírat náš newsletter a my tě budeme o všem informovat.</ContactInfo>
                    <Link to="https://www.slack.com/">
                            <SlackIcon src="/images/icons/slack-color.svg" />
                    </Link>
                <ButtonInputGroup/>
                </ContactHeroContainer>
                </Wrapper>
        </ContainerColor>
    )
}

export default ContactHero;
