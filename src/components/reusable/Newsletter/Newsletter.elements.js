import styled, {css} from 'styled-components';
import { colors, sizes, breakpoints } from '../../../variables';
import { Paragraph, TitleCenter } from '../styled';

export const NewsletterContainer = styled.div `
    margin: 80px auto 80px auto;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
    
`;

export const ParagraphCenter = styled(Paragraph) `
    text-align: center;
    color: ${colors.grey};
    font-weight: 300;
    margin-bottom: 40px;
`;

export const TitleCenterNews = styled(TitleCenter) `
    width: 100%;
    margin-bottom: 30px;
`;

export const MyForm = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid red;
`;


export const NewsletterButton = styled.input`
    width: 100%;
    background-color: ${colors.mainBlue};
    border: none;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    height: 50px;
    padding: 0 32px;
    border-radius: 25px;
    color: ${colors.white};
    //box-shadow: 0px 4px 2px rgba(68, 68, 68, 0.15);
    letter-spacing: 1px;
    font-weight: 500;
    ${({hideButton}) => hideButton && css`
        display: none;
    `};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    max-width: 300px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #0099AE;  
    }
`;

export const InputContainer = styled.div`
    background-color: ${colors.white};
    border: 1px solid ${colors.veryLightGrey} ; 
    padding: 0 32px;
    height: 50px;
    border-radius: 25px;
    //box-shadow: 0px 2px 5px rgba(68, 68, 68, 0.1) inset;
    max-width: 300px;
    display: flex;
    align-items: center;
    `;

export const CustomInput = styled.input`
    color: ${colors.lightGrey};
    font-weight: 300;
    outline: none;
    font-size:${sizes.sizeM};
    transition: all 0.2s ease;
    z-index: 500;
    border-color: transparent;
    background: none;
    cursor: text;
  }
`;

export const ButtonInputCont = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
    border: 1px solid blue;

    @media only screen and (max-width: ${breakpoints.tablet}) {
        align-items: center;
        margin-bottom: 40px;
    }
`;

