import styled from 'styled-components';
import { space ,fontSizes ,colors ,fullWidth } from '../../constants/theme';
export const Wrapper = styled.div`
   background-image: ${colors.background};
`
export const InnerWrap = styled.div`
  padding:${space[10] * 2}px 0px;
`
export const Section = styled.div`
   display:flex;
   align-items:center;
`
export const ContentWrap = styled.div`
    width: ${fullWidth};
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
`
export const Border = styled.div`
   border-bottom 2.4px solid ${colors.primary};
   width: 417px;
`
export const BottomWrap = styled.div`
   display:flex;
   align-items:center;
   padding:${space[10] + 47}px 0px;
   img{
       margin-right: ${space[6]}px;
   }
`
export const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: ${fontSizes[4] + 1}px;
    line-height: 39px;
    color: ${colors.text};
    text-align:left;
    margin-top: ${space[10]  + 1}px;
    margin-bottom: ${space[10]  + 4}px;
     &.title{
        font-weight: 700; 
        margin-top:0;
        margin-bottom: ${space[7]}px;
     }
     &.subtitle{
        margin-top:0;
        margin-bottom:0;
     }
`
export const Imgbox = styled.div`
     width: ${fullWidth};
//    img{ 
//       max-width: ${fullWidth};
//    } 
`
export const ImgWrap = styled.div`
`
export const SubHeading = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: ${fontSizes[4] + 1}px;
    line-height: 39px;
    color: ${colors.text};
    text-align:left;
    margin-bottom: ${space[10]}px;
`
export const SavingWrap= styled.div`
   width: ${fullWidth};
   background: ${colors.white};
`
export const Wrap= styled.div`
   width: ${fullWidth};
   padding:${space[10] * 3}px;
   display: flex;
   align-items:center;
   justify-content:center;
`