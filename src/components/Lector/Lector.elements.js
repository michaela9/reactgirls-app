import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const LectorTitle = styled.h3`
    text-align: center;
    font-size: ${sizes.sizeXXXL} ;
    font-weight: 900;
    margin: 0 auto;
`;

export const CardsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 80px;

`;
export const LectorWrapper = styled.div`
    width: 1280px;
    padding: 80px 50px;
    margin: 0 auto;
`;


export const Card = styled.div`
    height: 550px;
    display: flex;
    width: 360px;
    border-radius: 30px;
    background-color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    box-shadow: 0px 0px 40px rgba(68, 68, 68, 0.25), 0px 6px 6px rgba(68, 68, 68, 0.2);
    position: relative;
`;

export const LectorInterest = styled.h4`
    color: ${colors.mainBlue};
    text-align: center;
    font-weight: 400;
`;



export const LectorName = styled.h3`
    font-size: ${sizes.sizeL};
    text-align: center;
`;


export const LectorInfo = styled.p`
    text-align: center;
    line-height:1.6;
`;

export const LectorJob = styled.h5`
    text-align: center;
    font-weight: 300;
`;

export const LectorLink = styled(Link)`
    position: absolute;
    bottom: 0;
    right: 0;
    border: 4px solid white;
    width: 55px;
    height: 55px;
    background-color: ${colors.mainBlue};
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LectorImg = styled.img`
    height: 180px;
    border-radius: 90px;
`;

export const LectorImgContainer = styled.div`
    width: 180px;
    height: 180px;
    position: relative;
`

export const IconIn = styled.img`
    width: 22px;
    height: 22px;
    filter: invert(100%);
`




