import React, { useState } from 'react';

import { SponzorContainer} from './SponzorSection.elements';
import { SponzorImg} from './SponzorSection.elements';
 
function SponzorSection() {
    return (
        <>
            <SponzorContainer>
                <SponzorImg src={'images/sponzors/techaboo.png'}/>  
                <SponzorImg src={'images/sponzors/laufen.png'}/>
                <SponzorImg src={'images/sponzors/ng.png'}/>
                <SponzorImg src={'images/sponzors/Livesport_logo_basic-300x66.png'}/>
                <SponzorImg src={'images/sponzors/logo_applifting-300x135.png'}/>
                <SponzorImg src={'images/sponzors/edupunk-150x150.jpg'}/>
                <SponzorImg src={'images/sponzors/oakslab.png'}/>
                <SponzorImg src={'images/sponzors/pccbee-300x88-1.png'}/>
                <SponzorImg src={'images/sponzors/Productboard-logo-clean-300x76.png'}/>
                <SponzorImg src={'images/sponzors/puntoverde.png'}/>
            </SponzorContainer>
        </>
    )
}

export default SponzorSection