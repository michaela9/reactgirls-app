import styled from 'styled-components';
import  { sizes, colors } from '../../variables.js';
import { SubTitle } from '../reusable/Hero/Hero.elements';

import { Button } from '../reusable/styled';


export const SubTitleAbout = styled(SubTitle)`
    color: ${colors.darkGrey};
    text-align: center;
 `;

 
export const ButtonAbout = styled(Button)`
    align-items: center;
    align-self: center;

`;