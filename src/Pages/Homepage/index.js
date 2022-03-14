import React from 'react';
import { Container } from 'reactstrap';
import Header from '../../Components/Header';
import { ImageSection, TextSection, Title, Wrapper } from './style';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Container>
                <Wrapper>
                    <TextSection>
                        <Title>SaVE YOUR SPARE CHANGE FOR MORE THAN JUST A RAINNY DAY</Title>
                        <p>Create Digital Savings Jar for your Spare Change</p>
                    </TextSection>
                    <ImageSection>
                        <img src='static/icons/hero1.svg' />
                    </ImageSection>
                </Wrapper>
            </Container>
        </div>
    );
}

export default HomePage;
