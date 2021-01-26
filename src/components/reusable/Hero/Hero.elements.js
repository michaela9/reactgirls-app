import styled from 'styled-components';
import  { breakpoints } from '../../../variables';
import { TitleLeft, Subtitle, Button } from '../styled';

export const HeroWrapper = styled.div`
    display: flex;
    padding: 80px 0 80px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 120px 0 60px 0;
        transition: all 1.5s ease-in-out;
        &.active {
            padding: 40px 0 20px 0; 
        }
    }

    @media only screen and (min-width: 1250px) { 
        flex-direction: row;
    }
 `;

export const HeroTitle = styled(TitleLeft)`

@media screen and (max-width: 1250px) {
        text-align: center;
    }
    @media only screen and (max-width: 330px) {
        font-size: 22px;
        font-weight: 700;
    }
`;

export const ButtonHero = styled(Button)`
    max-width: 180px;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 50%;
    margin-right: 50px;
    justify-content: center;
    align-items: flex-start;
    //border: 1px solid red;

    @media screen and (max-width: 1250px) {
        width: 100%;
        margin: 0 auto 40px auto;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 `;

 export const ImgContainer = styled.div`
    width: 45px;
    height: 450px;
    border-radius: 50%;
    overflow: hidden;




    //border: 1px solid red;

    @media only screen and (max-width: 319px) { 
        width: 240px;
        height: 240px;         
        margin-top: 20px;
        margin-bottom: 15px;
    }
    @media only screen and (min-width:319px) and (max-width: 370px) { 
        width: 280px;
        height: 280px; 
        margin-top: 20px;
        margin-bottom: 15px;
    }
    @media only screen and (min-width:370px) and (max-width: 420px) { 
        width: 320px; 
        height: 320px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media only screen and (min-width: 420px) and (max-width: 1250px) { 
        width: 360px; 
        height: 360px;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    @media only screen and (min-width: 1250px) { 
        width: 450px; 
        height: 450px;

    }
 `;

export const HeroImg = styled.img`
    height: 450px;
    width: auto;
    @media only screen and (max-width: 319px) { 
        height: 240px; 
    }
    @media only screen and (min-width:319px) and (max-width: 370px) { 
        height: 280px; 
    }
    @media only screen and (min-width:370px) and (max-width: 420px) { 
        height: 320px;
    }
    @media only screen and (min-width: 420px) and (max-width: 1250px) { 
        height: 360px;
    }

    @media only screen and (min-width: 1250px) { 
        height: 450px;
    }
 `;

export const SubtitleHero = styled(Subtitle)`
    margin-bottom: 25px;
    margin-top: 15px;
`;

