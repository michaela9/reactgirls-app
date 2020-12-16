import styled from 'styled-components';
import { sizes, colors } from '../../variables.js';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Paragraph, ParagraphS, Name } from '../reusable/styled';
import Carousel from 'react-elastic-carousel';


export const CarouselLector = styled(Carousel)`
    .rec.rec-arrow-left, .rec.rec-arrow-right {
        background-color: ${colors.white} ;
        color: ${colors.grey} ;
        box-shadow: none;
    }
    .rec.rec-arrow:hover {
    color: ${colors.mainBlue};
    }

    .rec.rec-arrow:disabled {
    visibility: hidden;
    }  
`;

export const CardsContainer = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 80px 20px;
`;

export const Card = styled.div`
    height: 400px;
    min-width: 300px;
    max-width: 300px;
    display: flex;
    border-radius: 30px;
    background-color: ${colors.white} ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 35px;
    //box-shadow: 0px 0px 20px rgba(68, 68, 68, 0.15), 0px 6px 6px rgba(68, 68, 68, 0.1);
    box-shadow: 0px 0px 10px rgba(68, 68, 68, 0.15);
    margin: 20px;
    outline: none;
`;

export const LectorInterest = styled(Paragraph)`
    color: ${colors.mainBlue};
    text-align: center;
    font-weight: 400;
    height: 80px;
`;


export const LectorName = styled(Name)`
    text-align: center;
    font-weight: 900;
    margin-bottom: 10px;
`;


export const LectorJob = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: ${sizes.sizeXS};
    color: ${colors.grey};
    margin-bottom: 7px;
    width: 85%;
`;

export const LectorLink = styled.a`
    position: absolute;
    bottom: 0;
    right: 0;
    border: 4px solid white;
    width: 50px;
    height: 50px;
    background-color: ${colors.mainBlue};
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LectorImg = styled.img`
    height: 160px;
    border-radius: 80px;

`;

export const LectorImgContainer = styled.div`
   // width: 150px;
   // height: 150px;
   position: relative;
   margin-bottom: 40px;
`

export const IconIn = styled.img`
    width: 18px;
    height: 18px;
`;




