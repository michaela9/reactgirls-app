import React, { useState, useEffect } from 'react';
import { SponsorContainer} from './Sponsor.elements';
import { SponsorImg} from './Sponsor.elements';
import sponsorArr from './sponsorArr'; 
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";


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
                <Link to={sponsor.link}>
                    <SponsorImg src={sponsor.logo} />
                </Link>
                )
                )}
            </Carousel> 
        </SponsorContainer>
    )
}

export default Sponsor;