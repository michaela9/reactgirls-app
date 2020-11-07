import React from 'react';
import { Title, SubTitle, TitleContainer} from './Newsletter.elements';

import { Wrapper } from '../../components/reusable/styled';
import  Button from '../../components/reusable/Button/Button';


function Newsletter() {
    return (
        <Wrapper>
            <TitleContainer>
                <Title>
                    Zajímá Tě, kdy se bude konat další akce?
                </Title>
                <SubTitle>
                    Klikni na Odebírat Newsletter <br></br> a my se Ti ozveme!
                </SubTitle>
                    <Button>user@gmail.com</Button>
                    <Button>ODEBÍREJ NEWSLETTER</Button>
            </TitleContainer>
        </Wrapper>
    )
}

export default Newsletter;
