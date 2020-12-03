import React, { useState, useEffect } from 'react';
import { SponsorContainer} from './Sponsor.elements';
import { SponsorImg} from './Sponsor.elements';
import sponsorArr from './sponsorArr'; 
import Carousel from 'react-elastic-carousel';


function Sponsor() {
    return (
        <SponsorContainer>
            <Carousel 
                showArrows={false} 
                itemsToShow={5} 
                itemsToScroll={1} 
                enableAutoPlay={true}  
                pagination={false} 
                 >
                {sponsorArr.map((sponsor) => (
                <SponsorImg src={sponsor.logo} />
                )
                )}
            </Carousel> 
        </SponsorContainer>
    )
}

export default Sponsor;