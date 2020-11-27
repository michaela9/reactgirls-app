import React from 'react';
import { CustomButton } from './Button.elements';

function Button(props) {
    return (
        <CustomButton onClick={() => alert('clicked!')} type="button" className={props.className}>
            {props.children}
            </CustomButton>
    )
}

export default Button;

