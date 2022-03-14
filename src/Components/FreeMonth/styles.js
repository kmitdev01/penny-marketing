import styled from 'styled-components';
import { space ,fontSizes ,colors } from '../../constants/theme';
export const Wrapper = styled.div`
     display:flex;
     align-items:center;
     background: ${colors.white}
     width:100%;
`
export const Imgbox = styled.div`
   img{ 
      max-width:100%;
   } 
`
export const Heading = styled.h6`
    font-family: 'Gotham Rounded';
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[5] + 8}px;
    line-height: 68px;
    text-transform: uppercase;
    color: ${colors.text};
    text-align:left;
    border-bottom: 2.45084px solid #B0B3B1;
    margin-bottom: ${space[8] - 1}px;
`
export const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: ${fontSizes[4] + 1}px;
    line-height: 39px;
    color: ${colors.text};
    text-align:left;
`
export const TrialText = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSizes[4] + 1}px;
    line-height: 39px;
    color: ${colors.primary};
    text-align:left;
    margin-top: ${space[4]}px;
    margin-bottom: ${space[7]}px;
`