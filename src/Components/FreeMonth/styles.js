import styled from 'styled-components';
export const FullWrapper = styled.div`
     width:100%;
     background: #fff;
     padding:40px 0px;
     display: flex;
     align-items:center;
     justify-content:center;
`
export const Wrapper = styled.div`
     display:flex;
     align-items:center;
    
     width:  50%;
     @media only screen and (max-width:1400px){
        width:  80%;
     }
     @media only screen and (max-width: 1024px){
        flex-wrap: wrap;
        width:  100%;
    }
`
export const Imgbox = styled.div`
   margin-right:79px;
    @media only screen and (max-width: 1024px){
        width:  100%;
        margin-right: 0px;
        margin-bottom: 15px;
    }
   img{ 
      max-width:100%;
      @media only screen and (max-width: 1024px){
        display:block;
        margin:auto;
    }
   } 
`
export const Heading = styled.h6`
    font-family: 'GothamRounded';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 65px;
    text-transform: uppercase;
    color: #454545;
    text-align:left;
    border-bottom: 2.45084px solid #B0B3B1;
    margin-bottom: 17px;
    @media only screen  and (max-width: 1024px){
        text-align: center;
        br{
           display:none;
        }
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
    @media only screen and (max-width: 1024px){
        text-align: center;
    }
`
export const InnerWrap = styled.div`
    @media only screen and (max-width: 1024px){
        width:  100%;
        margin: auto;
    }
`
export const TrialText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 39px;
    color: #04A454;
    text-align:left;
    margin-top: 8px;
    margin-bottom: 14px;
    @media only screen and (max-width: 1024px){
        text-align: center;
    }
`
export const ButtonWrap = styled.div`
    @media only screen and (max-width: 1024px){
        display:flex;
        justify-content:center;
    }
`