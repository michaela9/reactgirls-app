import styled from 'styled-components';
import { sizes } from '../../variables';

export const SponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    padding: 80px;
    margin: 0 auto;
    padding: 80px 50px;
    align-items: center;
`;

export const SponsorImg = styled.img`
    height: 100px;  
`;

export const SponsorImgContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 50px;
`;

export const GoldSponsorship = styled.div`
    border-left: 5px solid gold;
    color: gold;
    font-size: ${sizes.sizeM};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
    margin-bottom: 15px;  
    margin-top: 40px; 
`;

export const SilverSponsorship = styled.div`
    border-left: 5px solid silver;
    color: silver;
    font-size: ${sizes.sizeS};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
    margin-bottom: 15px; 
`;

export const CommunitySponsorship = styled.div`
    border-left: 5px solid burlywood;
    color: burlywood;
    font-size: ${sizes.sizeS};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
`;
