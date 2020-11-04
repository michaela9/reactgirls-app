import React, { useState } from 'react';
import { 
    FooterContainer,
    FooterLogo,
    FooterInfo
    } from './FooterSection.elements';

    import {   } from '../../globalStyles';

function FooterSection() {
    return (
        <>
            <FooterContainer>
                <FooterLogo />
                <FooterInfo>ReactGirlsPrague 2020</FooterInfo> 
            </FooterContainer>
        </>
    )
}

export default FooterSection;
