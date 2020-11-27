import React from 'react';

import { 
InputContainer,
CustomInput
 } from './Input.elements';

function Input(
    value,
    type,
    onChange,
    setRef,
    ...props
) {
    return (
        <InputContainer>
            <CustomInput
            type="text"
            placeholder="text"
            onChange={props.onChange}
            value={props.value}
            />
      </InputContainer>
    )
}

export default Input;




  

