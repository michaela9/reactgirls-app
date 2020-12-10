import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { sizes, colors } from '../../variables';

export const SponsorContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 1280px;
    margin: 0 auto;
`;

export const SponsorImg = styled.img`
    height: 80px;
    
`;

export const SponsorImgContainer = styled.div`
    display: flex;
    justify-content: space-around;

`;

export const GoldStripe = styled.div`
    border-top: 1px solid gold;
    margin-top: 30px;
    font-weight: 300;
    padding: 5px;
    color: ${colors.grey};   
`;

export const SilverStripe = styled.div`
    margin-top: 30px;
    border-top: 1px solid silver;
    font-weight: 300;
    padding: 5px;
    color: ${colors.grey}; 
`;

export const CommunityStripe = styled.div`
    border-top: 1px solid burlywood;
    margin-top: 30px;
    font-weight: 300;
    padding: 5px;
    color: ${colors.grey}; 
`;

export const GoldSponsorship = styled.div`
    width: 50%;
    padding: 25px;
`;

export const SilverSponsorship = styled.div`
    width: 50%;
    padding: 25px;
`;

export const CommunitySponsorship = styled.div`
    width: 100%;
    padding: 25px;
`;

export const SponsorshipRow = styled.div`
    display: flex;
    width: 90%;
`;

export const ContainerMain = styled.div`
    padding: 10px 0px;
`;

