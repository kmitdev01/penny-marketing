import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`
export const FlexWrapper = styled.div`
  display: flex;
`
export const Text = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #454545;
    &.SecondText{
        margin: 0;
    }
    &.terms{
        margin-top: 20px;
    }
`
export const TextWrap = styled.div`
    margin-left: 44px;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const SocialMediaIcon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 11px;
    svg{
        color: #454545;
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`
export const IconWrap = styled.div`
    display: flex;
`
export const Divider = styled.div`
    margin-top: 20px;
    border-bottom: 1.68px solid #454545;
    width: 100%;
`