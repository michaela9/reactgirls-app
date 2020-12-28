import styled from 'styled-components';
import { sizes, colors } from '../../variables';
import { Paragraph } from '../reusable/styled';


export const WrapperAboutMore = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
`;

export const TextAboutMore = styled(Paragraph)`
    text-align: center;
    padding-bottom: 40px;
    padding-top: 40px;
    color: ${colors.grey};
    font-weight: 300;
    width: 60%;
    margin: 0 auto;

    a{
        text-decoration: none;
        color: ${colors.mainBlue};
        font-weight: 500;
    }
`;

export const ArticleContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;

`;

export const AboutMoreArticle = styled.div`
 background-color: ${colors.mainBlue};
 border-radius: 50%;
 width: 50px;
 height: 50px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: 25px;
 margin-right: 25px;
`;

export const AboutMoreLink = styled.a`
    color: ${colors.white};
    font-size: ${sizes.sizeXL};
    text-decoration: none;

`;

