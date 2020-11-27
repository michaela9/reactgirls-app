import React from 'react';
import { Container, Wrapper, Name, Paragraph, ParagraphS } from '../reusable/styled';
import { Link } from 'react-router-dom';
import contactArr from './contactArr';

import {
    ContactCardContainer,
    ContactCard,
    ContactImg,
    ContactSocial,
    SocialContactIcon,
    ContactText,
    ContactInfo
} from './ContactPeople.elements';

function ContactPeople() {
    return (
        <Container>
            <Wrapper>
                <ContactCardContainer>
                    {contactArr.map((contact) => (
                        <ContactCard>
                            <ContactImg src={contact.photo}/>
                            <ContactText>
                                <Name>{contact.name}</Name>
                                <ContactInfo>{contact.interest}</ContactInfo>
                                <ContactInfo>{contact.mail}</ContactInfo>
                                <ContactInfo>{contact.phone}</ContactInfo>
                                <ContactSocial>
                                    <Link to={contact.linkedIn}>
                                        <SocialContactIcon src="/images/icons/linkedIn.svg" />
                                    </Link>
                                    <Link to={contact.facebook}>
                                        <SocialContactIcon src="/images/icons/facebook.svg" />
                                    </Link>
                                    <Link to={contact.twitter}>
                                        <SocialContactIcon src="/images/icons/twitter.svg" />
                                    </Link>
                                </ContactSocial>
                            </ContactText>
                        </ContactCard>
                    ))}
                </ContactCardContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactPeople;
