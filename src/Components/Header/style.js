import styled from 'styled-components'

export const Wrapper = styled.div`
    background: #E5E5E5;
    img{
        height: 73px;
        width: 83px;
    }
`
export const NavLink = styled.link`
    font-family: Avenir Next LT Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    :hover{
        color: green !important;
    }
`
export const navbar = styled.div`
    padding: 0px 30px;
`
export const LoginButton = styled.button`
    color: #fff;
    padding: 10px 20px;
    background-color: #04A454;
    border-color: #6c757d;
    border: 1px solid transparent;
    border-radius: 20px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        color: #fff;
        background-color: #15824b;
        border-color: #565e64;
    }
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    // margin-right: 5px;
`