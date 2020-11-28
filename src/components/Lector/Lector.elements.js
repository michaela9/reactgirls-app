import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Paragraph, ParagraphS, Name } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';

export const CardsContainer = styled.div`
   display: flex;
   justify-content: space-between;

`;
export const LectorWrapper = styled.div`
    width: 1280px;
    padding: 80px 50px;
    margin: 0 auto;
`;


export const Card = styled.div`
    height: 550px;
    display: flex;
    width: 330px;
    border-radius: 30px;
    background-color: ${colors.white} ;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.15), 0px 6px 6px rgba(68, 68, 68, 0.1);
    position: relative;
`;

export const LectorInterest = styled(Paragraph)`
    color: ${colors.mainBlue};
    text-align: center;
    font-weight: 400;
    height: 60px;
`;

export const LectorArrow = styled.img`
    color: ${colors.mainBlue};
    width: 30px;
    height: 30px;
    position: relative;
    top: 275px;
`;


export const LectorName = styled(Name)`
    text-align: center;
    font-weight: 900;
`;


export const LectorInfo = styled(ParagraphS)`
    text-align: center;
    color: ${colors.grey};
    font-weight: 300;

`;

export const LectorJob = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
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
`

export const CarouselLector = styled(Carousel)`
    .rec.pagination {
        background: red;
    }
    .rec.rec-dot {
        outline: none;
        color: red;
        background-color: ${colors.lightBlue};
        box-shadow: none;
        border: 1px solid ${colors.grey};
        width: 12px;
        height: 12px;
        margin-top: 10px;
    }
    .rec.rec-dot_active {
        background: ${colors.mainBlue};
        outline: none;
        box-shadow: none;
    }
`;




