import styled from 'styled-components';
import { sizes, colors, breakpoints } from '../../../variables';
import { Heading3 } from '../styled';

export const InfoContent = styled(Heading3)`
    font-size: ${sizes.sizeL} ;
    margin: 50px auto 50px auto;
    width: 45%;
    text-align: center;
    line-height: 1.6;
    padding: 30px 0;
    font-weight: 300;
    color: ${colors.grey};

    
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 75%;
        margin: 20px auto 20px auto;
        font-size: ${sizes.sizeM};
        line-height: 1.6;
    }
`;
