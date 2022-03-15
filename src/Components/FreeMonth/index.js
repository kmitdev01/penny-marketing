import React from 'react';
import SecondaryButton from '../buttons/component/SecondaryButton/secondaryBtn/secondaryBtn';
import {
    Wrapper,
    Imgbox,
    Heading,
    Text,
    TrialText,
    InnerWrap,
    ButtonWrap,
} from './styles';
const FreeMonth = () => {
    return (
        <Wrapper>
            <Imgbox>
                <img src="./static/images/pig.svg" alt="pig" />
            </Imgbox>
            <InnerWrap>
                <Heading>Don't Have <br></br>PennyProfit?</Heading>
                <Text>
                    Get Started Now And Begin Saving
                </Text>
                <TrialText>Try It Free For 1 Month!</TrialText>
                <ButtonWrap>
                    <SecondaryButton title={'Get Started'} style={{ width: '201px' }} />
                </ButtonWrap>
            </InnerWrap>
        </Wrapper>
    );
};

export default FreeMonth;