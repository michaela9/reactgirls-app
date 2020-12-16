import React from 'react';
import Input from '../Input/Input';
import {Button} from '../styled';
import { ButtonInputCont } from '../ButtonInputGroup/ButtonInputGroup.elements';

function ButtonInputGroup() {
    return (
        <ButtonInputCont>
            <Input />
            <Button href="">ODEBÍRAT NEWSLETTER</Button>
        </ButtonInputCont>
    )
}

export default ButtonInputGroup;