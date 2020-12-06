import React, { useState, useEffect } from 'react';
import { SponsorContainer} from './Sponsor.elements';
import { SponsorImg, CarouselSponsor} from './Sponsor.elements';
import sponsorArr from './sponsorArr'; 

import { Link } from "react-router-dom";


function Sponsor() {
    return (
        <SponsorContainer>
            <CarouselSponsor 
                showArrows={false} 
                itemsToShow={5} 
                itemsToScroll={1} 
                enableAutoPlay={true}  
                pagination={false} 
                 >
                {sponsorArr.map((sponsor) => (
                <a href={sponsor.link}>
                    <SponsorImg src={sponsor.logo} />
                </a>
                )
                )}
            </CarouselSponsor> 
        </SponsorContainer>
    )
}

export default Sponsor;