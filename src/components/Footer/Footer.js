import React from 'react';
import { 
    FooterContainer,
    FooterLogo,
    FooterInfo
    } from './Footer.elements';

import {   } from '../../globalStyles';

function Footer() {
    return (
            <FooterContainer>
                <FooterLogo />
                <FooterInfo>© Michaela Rudolfová 2020</FooterInfo> 
            </FooterContainer>
    )
}

export default Footer;
