import React from 'react';
import { Container } from 'reactstrap';
import MoneyCard from '../../Components/Cards/Moneycard';
import FreeMonth from '../../Components/FreeMonth';
import Header from '../../Components/Header';
import {
    FullWrapper,
    Wrapper,
    Title,
    CardBox
} from './styles';
const MyMoney = () => {
    return (
        <FullWrapper>
            <Header />
            <Wrapper>
                <Container>
                    <Title>Your Money <br></br>Your Way</Title>
                    <CardBox>
                        <MoneyCard
                            style={{ marginBottom: '18px', marginTop: '47px' ,}}
                            imgbox={{ width: '147px' }}
                            src={'static/images/roundUpSaving.svg'}
                            title={'Round-Up Savings'}
                            subtitle="Take the burden out of lump-sum saving. Automatically
                                      save the spare change from every one of your purchases. 
                                      Round-up to the nearest dollar or set any constant amount you'd lik"
                        />
                        <MoneyCard
                            className={`middleCard`}
                            style={{ marginBottom: '35px', marginTop: '31px' }}
                            src={'static/images/roundSplit.svg'}
                            title={'Round-Up Splits'}
                            subtitle="Split your round-ups to go into multiple Jars at
                                      one time. Watch as all of your Jars grow simultaneously!"
                        />
                        <MoneyCard
                            style={{ marginBottom: '18px', marginTop: '17px' }}
                            imgbox={{ width: '147px' }}
                            src={'static/images/jarLock.svg'}
                            title={'Private Jars'}
                            subtitle="Create a private Jar when you want to save or pool money with
                                      close friends or family. Simply invite anybody you would like to join"
                        />
                        <MoneyCard
                            style={{ marginBottom: '18px', marginTop: '24px' }}
                            src={'static/images/jarLock.svg'}
                            title={'Private Jars'}
                            subtitle="Create a public Jar any time you need contributions from anybody and 
                                     everybody. Contributions can be made in lump-sum form or through automatic round-ups"
                        />
                        <MoneyCard
                            className={`middleCard`} 
                            style={{ marginBottom: '18px', marginTop: '37px' }}
                            src={'static/images/exchange.svg'}
                            title={'Send And Receive Money'}
                            subtitle="Send money instantly! Receive money instantly!"
                        />
                        <MoneyCard
                            style={{ marginBottom: '18px', marginTop: '39px' }}
                            src={'static/images/cashBundle.svg'}
                            title={'Pooling Money'}
                            subtitle="Digital Jars are the perfect place to hold money for a 
                                      group of people. No more envelopes needed to hold cash"
                        />
                    </CardBox>
                </Container>
            </Wrapper>
            <FreeMonth />
        </FullWrapper>
    );
};

export default MyMoney;