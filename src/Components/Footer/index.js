import React from 'react';
import { Container } from 'reactstrap';
import { Divider, FlexWrapper, IconWrap, SocialMediaIcon, Text, TextWrap, Wrapper } from './style';
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <IconWrap>
                        <SocialMediaIcon>
                            <AiFillLinkedin />
                            Like 203
                        </SocialMediaIcon>
                        <SocialMediaIcon>
                            <AiFillTwitterCircle />
                            Tweet
                        </SocialMediaIcon>
                        <SocialMediaIcon>
                            <AiFillLinkedin />
                            Share
                        </SocialMediaIcon>
                    </IconWrap>
                    <Divider> </Divider>
                    <FlexWrapper>
                        <img src='static/images/footerimg.svg' />
                        <TextWrap>
                            <Text>© 2022 Beta / Contact Us / FAQ / Blog</Text>
                            <Text className='SecondText'>*Public Jars with over 100 contributors or more than $3,500 are subject to a 3% service fee.<br></br> **A 1% transaction fee will be added to any amount of money sent from outside of PennyProfit.</Text>
                        </TextWrap>
                        <Text className='terms'>Terms & ConditionsPrivacy Policy</Text>
                    </FlexWrapper>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Footer;
