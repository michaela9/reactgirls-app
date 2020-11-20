import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Paragraph } from '../reusable/styled.js';


export const ContactHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

`

export const ContactHeroTitle = styled.h1`
    font-size: ${sizes.sizeXXXL};
    font-weight: 900;
    text-align: center;
    margin-bottom: 40px;
    width: 40%;

`

export const ContactInfo = styled(Paragraph)`
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
    width: 40%;
    font-weight: 300;
    color: ${colors.grey}

`


export const SlackIcon = styled.img`
    width: 60px;
    margin-bottom: 40px;
`

