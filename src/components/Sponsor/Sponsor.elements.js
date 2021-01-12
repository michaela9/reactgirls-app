import styled from 'styled-components';
import { sizes } from '../../variables';





export const SponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 50px;
    align-items: center;

    
    @media only screen and (max-width: 768px) {
    padding: 40px 50px;
    }
`;

export const SponsorImg = styled.img`
    height: 100px;
    margin: 40px; 

    @media only screen and (max-width: 768px) {
    height: 58px;
    margin: 10px;
    }
`;

export const SponsorImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 10px; 
    //border: 1px solid red; 
}
`;

export const GoldSponsorship = styled.div`
    border-left: 5px solid #b8860b;
    color: #b8860b;
    font-size: ${sizes.sizeM};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
    margin-bottom: 15px;  
    margin-top: 50px;
    //border: 1px solid red;

    @media only screen and (max-width: 768px) {
    padding-left: 10px;
    margin-bottom: 10px;  
    margin-top: 40px;
    }
`;

export const SilverSponsorship = styled.div`
    border-left: 5px solid #838996;
    color: #838996;
    font-size: ${sizes.sizeM};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
    margin-bottom: 15px; 
    @media only screen and (max-width: 768px) {
    padding-left: 10px;
    margin-bottom: 10px;  
    }
`;

export const CommunitySponsorship = styled.div`
    border-left: 5px solid #003399;
    color: #003399;
    font-size: ${sizes.sizeM};
    font-weight: 500;
    width: 100%;
    padding-left: 15px;
    @media only screen and (max-width: 768px) {
    padding-left: 10px;
    margin-bottom: 10px;  
    }
`;
