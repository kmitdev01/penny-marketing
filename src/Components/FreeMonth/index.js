import React from 'react';
// import SecondaryButton from 'Components/buttons/component/SecondaryButton/secondaryBtn';
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
                <Heading>Saving The <br></br>Smart Way</Heading>
                <Text>
                    Get Started Now And Begin Saving
                </Text>
                <TrialText>Try It Free For 1 Month!</TrialText>
                {/* <SecondaryButton/> */}
            </div>
        </Wrapper>
    );
};

export default FreeMonth;