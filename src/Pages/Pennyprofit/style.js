import styled from 'styled-components';
export const Wrapper = styled.div`
   background-image: linear-gradient(180deg, #FFFFFF 0%, #E1E5E9 100%);
`
export const InnerWrap = styled.div`
  padding:40px 0px;
`
export const Section = styled.div`
   display:flex;
   align-items:center;
   @media only screen and (max-width:1024px){
       flex-wrap: wrap;
   }
`
export const ContentWrap = styled.div`
    width: 100%;
`
export const Heading = styled.h6`
    font-family: 'GothamRounded';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-transform: uppercase;
    color: #454545;
    text-align:left;
    @media only screen and (max-width:1024px){
      br{
         display:none;
      }
   }
`
export const Border = styled.div`
   border-bottom 2.4px solid #04A454;
   width: 417px;
   @media only screen and (max-width:1024px){
      width: 100%;
   }
`
export const BottomWrap = styled.div`
   display:flex;
   align-items:center;
   padding:67px 0px;
   img{
       margin-right: 12px;
   }
   @media only screen and (max-width:1024px){
      flex-wrap: wrap;
   }
`
export const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 33px;
    line-height: 39px;
    color: #454545;
    text-align:left;
    margin-top: 21px;
    margin-bottom: 24px;
     &.title{
        font-weight: 700; 
        margin-top:0;
        margin-bottom:14px;
     }
     &.subtitle{
        margin-top:0;
        margin-bottom:0;
     }
`
export const Imgbox = styled.div`
     width: 100%;
//    img{ 
//       max-width: 100%;
//    } 
`
export const ImgWrap = styled.div`
   @media only screen and (max-width:1024px){
      width: 100%;
   }
`
export const SubHeading = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 33px;
    line-height: 39px;
    color: #454545;
    text-align:left;
    margin-bottom:20px;
`
export const SavingWrap= styled.div`
   width: 100%;
   background: #fff;
`
export const Wrap= styled.div`
   width: 100%;
   padding:30px 0px;
   display: flex;
   align-items:center;
   justify-content:center;
`
