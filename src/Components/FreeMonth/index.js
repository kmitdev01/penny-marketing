import React from 'react';
import SecondaryButton from '../buttons/component/SecondaryButton/secondaryBtn/secondaryBtn';
import {
    Wrapper,
    Imgbox,
    Heading,
    Text,
    TrialText
} from './styles';
const FreeMonth = () => {
    return (
        <Wrapper>
            <Imgbox>
                <img src="./static/images/pig.svg" alt="pig" />
            </Imgbox>
            <div>
                <Heading>Don't Have <br></br>PennyProfit?</Heading>
                <Text>
                    Get Started Now And Begin Saving
                </Text>
                <TrialText>Try It Free For 1 Month!</TrialText>
                <SecondaryButton title={'Get Started'} style={{width:'201px'}}/>
            </div>
        </Wrapper>
    );
};

export default FreeMonth;