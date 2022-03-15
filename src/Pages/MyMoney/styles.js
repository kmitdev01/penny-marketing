import styled from 'styled-components';

export const FullWrapper = styled.div`
`
export const Wrapper = styled.div`
    padding:40px 0px 80px 0px;
    background-image: linear-gradient(180deg, #FFFFFF 0%, #E1E5E9 100%);
`
export const Title = styled.h6`
    font-family: 'GothamRounded';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    text-align: center;
    text-transform: uppercase;
    color: #454545;
    margin-bottom: 40px;
`
export const CardBox = styled.div`
    display:flex;
    align-items-center;
    justify-content:center;
    flex-wrap:wrap;
    .middleCard{
        margin-right:34px;
        margin-left:34px;
    }
    @media only screen and (max-width:1399px){
        .middleCard{
            margin-right:0px;
            margin-left:34px;
        } 
    }
`
