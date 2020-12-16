import styled from 'styled-components';
import { sizes, colors } from '../../../variables';
import { Heading3 } from '../styled';

export const InfoContent = styled(Heading3)`
    font-size: ${sizes.sizeL} ;
    margin: 0 auto;
    width: 45%;
    text-align: center;
    line-height: 1.6;
    padding: 30px 0;
    font-weight: 300;
    color: ${colors.grey};
`;