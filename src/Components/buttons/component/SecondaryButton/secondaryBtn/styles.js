import styled from 'styled-components';
import { space ,fontSizes ,colors } from '../../constants/theme';
export const Button = styled.div`
     display:flex;
     align-items:center;
     background: ${colors.secondary};
     width:100%;
     padding: ${space[0] + 1}px ${space[10] + 4}px;
     color: ${colors.white};
     font-weight: 700;
    font-size:${fontSizes[2] + 2}px;
    line-height: 26px;
    text-align: center;
    text-transform: capitalize;
`