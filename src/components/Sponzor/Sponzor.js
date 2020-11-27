import React, { useState } from 'react';

import { SponzorContainer} from './Sponzor.elements';
import { SponzorImg} from './Sponzor.elements';

import sponzorArr from './sponzorArr';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";


 
function Sponzor() {
    return (
            <SponzorContainer>
                <Carousel  itemsToShow={5}>
                {sponzorArr.map((sponzor) => (
                    <SponzorImg src={sponzor.logo} />
                    )
                )}
                </Carousel> 
            </SponzorContainer>
    )
}

export default Sponzor;