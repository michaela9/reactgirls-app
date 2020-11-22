import styled, {css} from "styled-components";
import  { sizes, colors } from '../../variables.js';

export const Heading1 = styled.h1`
    font-size: ${sizes.sizeXXXL} ;
    line-height: 1.4;
`;

export const Heading2 = styled.h2`
    font-size: ${sizes.sizeXXL};
    line-height: 1.4;
`;

export const Heading3 = styled.h3`
    font-size: ${sizes.sizeM};
    line-height: 1.6;
`;

export const Paragraph = styled.p`
    font-size: ${sizes.sizeM};
    line-height: 1.6;
`;

export const ParagraphS = styled.p`
    font-size: ${sizes.sizeS};
    line-height: 1.7;
`;


export const Container = styled.div`
    z-index:1;
    width: 100%;
    background-color: ${({lightblue}) => (lightblue ? `#EBF6F8`  : `#FFFBFA` )};
`;


export const Wrapper = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 80px 50px;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({imgstart}) => (imgstart ? 'row-reverse' : 'row')};
`;

export const WrapperColumn = styled.div`
    width: 1280px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 80px 50px;
    align-items: center;
`;


export const TitleCenter = styled(Heading1)`
    text-align: center;
    font-weight: 900;
`; 

export const TitleLeft = styled(Heading1)`
    text-align: left;
    margin-bottom: 25px;
    font-weight: 900;
`;

export const SubTitleLeft = styled(Heading2)`
    text-align: left;
    font-weight: 900;
`;


export const Name = styled(Heading3)`
    text-align: center;
    font-weight: 900;
`;


export default styled;