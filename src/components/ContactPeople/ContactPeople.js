import React from 'react';
import { Container, Wrapper } from '../reusable/styled';
import { Link } from 'react-router-dom';

import {
    ContactCardContainer,
    ContactCard,
    ContactImg,
    ContactInterest,
    ContactMail,
    ContactNumber,
    ContactSocial,
    ContactName,
    ContactText,
    SocialContactIcon
} from './ContactPeople.elements';


function ContactPeople() {
    return (
        <Container>
            <Wrapper>
                <ContactCardContainer>
                    <ContactCard>
                        <ContactImg src='/images/lectors/Terka.jpg'/>
                        <ContactText>
                            <ContactName>Tereza Vaňková</ContactName>
                            <ContactInterest>ReactGirls zakladatelka</ContactInterest>
                            <ContactMail>terezavankova@edufactory.cz</ContactMail>
                            <ContactNumber>+420 737 611 231</ContactNumber>
                            <ContactSocial>
                                <Link to="https://www.linkedIn.com/">
                                    <SocialContactIcon src="/images/icons/linkedIn.svg" />
                                </Link>
                                <Link to="https://www.facebook.com/">
                                    <SocialContactIcon src="/images/icons/facebook.svg" />
                                </Link>
                                <Link to="https://www.twitter.com/">
                                    <SocialContactIcon src="/images/icons/twitter.svg" />
                                </Link>
                            </ContactSocial>
                        </ContactText>
                    </ContactCard>
                    <ContactCard>
                        <ContactImg src='/images/lectors/simca.jpg'/>
                        <ContactText>
                            <ContactName>Simona Töröková</ContactName>
                            <ContactInterest>Organizátorka</ContactInterest>
                            <ContactMail>torokova.simona@gmail.com</ContactMail>
                            <ContactNumber>+420 xxx xxx xxx</ContactNumber>
                            <ContactSocial>
                                <Link to="https://www.linkedIn.com/">
                                    <SocialContactIcon src="/images/icons/linkedIn.svg" />
                                </Link>
                                <Link to="https://www.facebook.com/">
                                    <SocialContactIcon src="/images/icons/facebook.svg" />
                                </Link>
                                <Link to="https://www.twitter.com/">
                                    <SocialContactIcon src="/images/icons/twitter.svg" />
                                </Link>
                            </ContactSocial>

                        </ContactText>
                    </ContactCard>
                    <ContactCard>
                        <ContactImg src='/images/lectors/zuzkastav-1.png'/>
                        <ContactText>
                            <ContactName>Zuzana Stavjaňová</ContactName>
                            <ContactInterest>Organizátorka</ContactInterest>
                            <ContactMail>zuzanastavjanova@seznam.cz</ContactMail>
                            <ContactNumber>+420 xxx xxx xxx</ContactNumber>
                            <ContactSocial>
                                <Link to="https://www.linkedIn.com/">
                                    <SocialContactIcon src="/images/icons/linkedIn.svg" />
                                </Link>
                                <Link to="https://www.facebook.com/">
                                    <SocialContactIcon src="/images/icons/facebook.svg" />
                                </Link>
                                <Link to="https://www.twitter.com/">
                                    <SocialContactIcon src="/images/icons/twitter.svg" />
                                </Link>
                            </ContactSocial>
                        </ContactText>
                        </ContactCard>
                </ContactCardContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactPeople;
