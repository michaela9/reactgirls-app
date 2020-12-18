import React from 'react';

import { 
    BankContainer, 
    ContentContainer, 
    BankIcon, 
    BankHeading, 
    BankText 
} from './ContactBank.elements';
import { Container, Wrapper } from '../reusable/styled';

function ContactBank() {
    return (
        <Container lightBlue>
            <Wrapper>
                <ContentContainer>
                    <BankContainer>
                        <BankIcon src="/images/icons/location.svg" />
                        <BankHeading>Sídlo a fakturační údaje</BankHeading>
                        <BankText>
                        ReactGirls z. s.
                            <br />
                            V jehličí 2106/2, Krč,
                            <br />
                            Praha 4, 142 00
                            <br />
                            Česká republika
                            <br />
                            info@reactgirls.cz 
                            <br />
                            IČO xxxxxxxx, DIČ xxxxxxxxxxx
                        </BankText>
                    </BankContainer>
                    <BankContainer>
                        <BankIcon src="/images/icons/money-bag.svg" />
                        <BankHeading>Bankovní spojení</BankHeading>
                        <BankText>
                            Fio banka a. s.,
                            <br />
                            V Celnici 1028/10,
                            <br />
                            117 21 Praha 1
                            <br />
                            Č. ú.: 2001890593/2010 
                            <br />
                            IBAN: Z3020100000002001890593
                            <br />
                            BIC/SWIFT: FIOBCZPPXXX
                        </BankText>
                    </BankContainer>
                </ContentContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactBank;
