import styled from 'styled-components';
import  { breakpoints } from '../../../variables';
import { TitleLeft, Subtitle } from '../styled';

export const HeroWrapper = styled.div`
    display: flex;
    padding: 80px 0 80px 0;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 140px 0 60px 0;

        &.active {
        padding: 60px 0 60px 0;
    }
    }
 `;

export const HeroTitle = styled(TitleLeft)`

@media screen and (max-width: ${breakpoints.tablet}) {
        text-align: center;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 45%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
    //border: 1px solid red;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 85%;
        margin: 0 auto 40px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 `;

 export const ImgContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    right: 100px;
    //border: 1px solid red;

    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 350px;
        height: 350px;
        margin: 0 auto;
    }
 `;

export const HeroImg = styled.img`
    height: 500px;
    width: auto;
    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 350px; 
    }
 `;

export const SubtitleHero = styled(Subtitle)`
    margin-bottom: 25px;
    margin-top: 15px;
`;

