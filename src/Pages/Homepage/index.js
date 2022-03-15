import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../../Components/Footer';
import FreeMonth from '../../Components/FreeMonth';
import Header from '../../Components/Header';
import { HoleWrapper, ImageSection, Text, TextSection, Title, HeroSection, SubTitle, VideoPlay } from './style';

const HomePage = () => {
    return (
        <div>
            <HoleWrapper>
                <Header />
                <Container>
                    <HeroSection>
                        <TextSection>
                            <Title>SAVE YOUR SPARE CHANGE FOR MORE THAN JUST A RAINNY DAY</Title>
                            <Text>Create Digital Savings Jar for your Spare Change</Text>
                        </TextSection>
                        <ImageSection>
                            <img src='static/images/hero1.svg' />
                        </ImageSection>
                    </HeroSection>
                    <HeroSection>
                        <ImageSection>
                            <img style={{width: '60%'}} src='static/images/hero2.png' />
                        </ImageSection>
                        <TextSection>
                            <SubTitle>Spare change saving when you don’t use cash</SubTitle>
                            <Text>Round-Up your purcahses and split your spare change to automatically go into multiple savings Jars at once.</Text>
                        </TextSection>
                        
                    </HeroSection>
                    <VideoPlay>
                        <img src='static/images/hero3.png' />
                    </VideoPlay>
                    <FreeMonth />
                    
                </Container>
                {/* <Footer /> */}
            </HoleWrapper>
        </div>
    );
}

export default HomePage;
