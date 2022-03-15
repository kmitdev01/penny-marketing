import React from 'react';
import { Container } from 'reactstrap';
import FreeMonth from '../../Components/FreeMonth';
import Header from '../../Components/Header';
import {
    Wrapper,
    Section,
    InnerWrap,
    ContentWrap,
    Imgbox,
    Heading,
    Text,
    BottomWrap,
    SubHeading,
    SavingWrap,
    Wrap,
    Border,
    ImgWrap
} from './style';
const PennyProfit = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <InnerWrap>
                    <Section>
                        <ContentWrap>
                            <Heading>Saving The <br></br>Smart Way</Heading>
                            <Border></Border>
                            <Text>
                                Remember saving your spare change in a Jar at home? Well, PennyProfit
                                allows you to save all of your spare change from every purchase in
                                multiple Jars at the same time!
                            </Text>
                            <Text className="title">Don't make purchases with cash?</Text>
                            <Text className="subtitle">
                                No problem! PennyProfit will round-up any transaction
                                you would like whether you use cash or not.
                            </Text>
                        </ContentWrap>
                        <Imgbox>
                            <img src="./static/images/emptyjar.svg" alt="emergenency vocation" />
                        </Imgbox>
                    </Section>
                    <BottomWrap>
                        <ImgWrap>
                            <img src="./static/images/emptyjar.svg" alt="jar" />
                        </ImgWrap>
                        <ContentWrap>
                            <SubHeading>
                                Save all of your spare change in one Jar or split that spare change to go into different Jars -- all
                                automatically! Simply set a split percentage for each Jar and watch your savings grow simultaneously.
                            </SubHeading>
                            <SubHeading>
                                Allow others to save with you to fill your Jars even faster. Remember, the more people
                                saving in one Jar, the quicker it grows!
                            </SubHeading>
                            <SubHeading>
                                Learn more about the many things you can do with Jars here.
                            </SubHeading>
                        </ContentWrap>
                    </BottomWrap>
                </InnerWrap>
            </Container>
            <SavingWrap>
                    <Wrap>
                        <FreeMonth/>
                    </Wrap>
                </SavingWrap>
        </Wrapper>
    );
};

export default PennyProfit;