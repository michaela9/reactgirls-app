import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../../../variables';

export const InputContainer = styled.div`
    background-color: ${colors.white};
    border: 1px solid ${colors.darkGrey} ; 
    padding: 12px 35px;
    border-radius: 25px;
    box-shadow: 0px 2px 5px rgba(68, 68, 68, 0.2) inset;
    width: 300px;
    `;

export const CustomInput = styled.input.attrs({ 
    type: 'submit',
    value: 'user@gmail.com'
  })`
    color: ${colors.lightGrey};
    font-weight: 300;
    outline: none;
    font-size:${sizes.sizeM};
    transition: all 0.2s ease;
    z-index: 500;
    border-color: transparent;
    cursor: pointer;
    background: none;
  }
`;
