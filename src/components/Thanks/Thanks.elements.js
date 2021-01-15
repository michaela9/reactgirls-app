import styled from 'styled-components';
import { Paragraph } from '../../components/reusable/styled';
import { colors, breakpoints } from '../../variables';


export const ThanksText = styled(Paragraph)`
    text-align: center;
    margin: 0 auto;
    font-weight: 300;

`;

export const WrapperThanks = styled(Paragraph)`
    padding-top: 80px;
    padding-bottom: 80px;
    border-top: 2px solid #EBEBEB ;
    border-bottom: 2px solid #EBEBEB;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        padding-top: 40px;
        padding-bottom: 60px;
    }
`;