import React, { useState, useEffect } from 'react';
import { SponsorContainer, SponsorImgContainer, GoldStripe, GoldSponsorship,SilverSponsorship, CommunitySponsorship, SilverStripe, CommunityStripe, SponsorshipRow, ContainerMain } from './Sponsor.elements';
import { SponsorImg } from './Sponsor.elements';
import sponsorArr from './sponsorArr'; 

import { Wrapper } from '../reusable/styled';


function Sponsor() {
    return (
        <ContainerMain>
            <SponsorContainer>
                <GoldSponsorship>
                    
                    <SponsorImgContainer>
                        <a href="https://www.livesport.eu/">
                            <SponsorImg src="/images/sponzors/Livesport_logo_basic-300x66.png"/>
                        </a>
                        <a href="https://edupunk.cz/">
                            <SponsorImg src="/images/sponzors/edupunk-150x150.jpg"/>
                        </a>
                        <a href="https://www.applifting.cz/">
                            <SponsorImg src="/images/sponzors/logo_applifting-300x135.png"/>
                        </a>
                    </SponsorImgContainer>
                    <GoldStripe>Gold</GoldStripe>
                </GoldSponsorship>
                <SilverSponsorship>
                    
                    <SponsorImgContainer>
                        <a href="https://www.laufen.cz/?gclid=CjwKCAjwrcH3BRApEiwAxjdPTY8h7jL-L3LkYFK1zmDFTNg4uPPDi0kAM04t3aoc6H_MCSPmSMs3vRoCHLAQAvD_BwE">
                            <SponsorImg src="/images/sponzors/laufen.png"/>
                        </a>
                        <a href="https://www.ppcbee.com/cs?gclid=CjwKCAjwrcH3BRApEiwAxjdPTUrWCsH29ks9kWsxEtCWvnwNzMJJJemKmoxHd55pyWEU79oHtHu-KRoCLUMQAvD_BwE">
                            <SponsorImg src="/images/sponzors/pccbee-300x88-1.png"/>
                        </a>
                        <a href="https://www.productboard.com/">
                            <SponsorImg src="/images/sponzors/productboard.png"/>
                        </a>
                    </SponsorImgContainer>
                    <SilverStripe>Silver</SilverStripe>
                </SilverSponsorship>
            </SponsorContainer>
            <SponsorContainer>
                <CommunitySponsorship>
                    
                    <SponsorImgContainer>
                        <a href="https://techtaboo.dev/">
                            <SponsorImg src="/images/sponzors/techaboo.png"/>
                        </a>
                        <a href="https://www.ngparty.cz/">
                            <SponsorImg src="/images/sponzors/ng.png"/>
                        </a>
                        <a href="https://www.oakslab.com/">
                            <SponsorImg src="/images/sponzors/oakslab.png"/>
                        </a>
                        <a href="https://www.puntoverde.cz/">
                            <SponsorImg src="/images/sponzors/puntoverde.png"/>
                        </a>
                    </SponsorImgContainer>
                    <CommunityStripe>Community</CommunityStripe>
                </CommunitySponsorship>  
            </SponsorContainer>
        </ContainerMain>
    )
}

export default Sponsor;