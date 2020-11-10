import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


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

export const ContactInfo = styled.p`
    text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 40px;
    line-height: 1.6;
    width: 40%;

`


export const SlackIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 40px;
`

