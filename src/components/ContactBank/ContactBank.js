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
        <Container>
            <Wrapper>
                <ContentContainer>
                    <BankContainer>
                        <BankIcon src="/images/icons/home.svg" />
                        <BankHeading>Sídlo a fakturační údaje</BankHeading>
                        <BankText>
                            ReactGirls 
                            <br />
                            Václavské náměstí 1
                            <br />
                            Praha 1, 110 00
                            <br />
                            Česká republika
                            <br />
                            info@reactgirls.cz 
                            <br />
                            IČO xxxxxxxx, DIČ xxxxxxxxxxx
                        </BankText>
                    </BankContainer>
                    <BankContainer>
                        <BankIcon src="/images/icons/bank.svg" />
                        <BankHeading>Bankovní spojení</BankHeading>
                        <BankText>
                            Fio banka a. s.,
                            <br />
                            V Celnici 1028/10,
                            <br />
                            117 21 Praha 1
                            <br />
                            Č. ú.: xxxxxxxxxxxxxxx/xxxx 
                            <br />
                            IBAN: xxxxxxxxxxxxxxxxxxxxxxxxx
                            <br />
                            BIC/SWIFT: xxxxxxxxxxxxxxxxxx
                        </BankText>
                    </BankContainer>
                </ContentContainer>
            </Wrapper>
        </Container>
    )
}

export default ContactBank;
