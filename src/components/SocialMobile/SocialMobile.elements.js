import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints } from '../../variables';

export const SocialMob = styled.div`
    display: flex;
    flex-direction: row;
    padding: 80px 16px 80px 16px;
    justify-content: center;
`;

export const SocialIconMob = styled.img`
    width: 22px;
    height: 22px;
    margin: 14px;
    :hover{
        filter: invert(100%);
    }
`;
