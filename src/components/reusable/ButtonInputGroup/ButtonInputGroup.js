import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ButtonInputCont } from '../ButtonInputGroup/ButtonInputGroup.elements';

function ButtonInputGroup() {
    return (
        <ButtonInputCont>
            <Input />
            <Button>ODEBÍRAT NEWSLETTER</Button>
        </ButtonInputCont>
    )
}

export default ButtonInputGroup;
