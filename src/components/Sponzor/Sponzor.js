import React, { useState } from 'react';

import { SponzorContainer} from './Sponzor.elements';
import { SponzorImg} from './Sponzor.elements';

import sponzorArr from './sponzorArr';
 
function Sponzor() {
    return (
            <SponzorContainer>
                {sponzorArr.map((sponzor) => (
                    <SponzorImg src={sponzor.logo} />
                    )
                )} 
            </SponzorContainer>
    )
}

export default Sponzor;