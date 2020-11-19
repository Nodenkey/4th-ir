import React from 'react';
import {
    GenericLandingSubtitle,
    GenericLandingTitle, IndustryLandingWrapper,
} from "../toolbelt/toolbelt.style";
import {IndustryLandingHeader} from "../toolbelt/toolbelt.component";

const WealthPageLanding = () => {
    return (
        <IndustryLandingWrapper img='wealth' size='initial' overlay='.8'>
            <IndustryLandingHeader industry='wealth'/>
            <GenericLandingTitle>Artificial Intelligence 4 Wealth</GenericLandingTitle>
            <GenericLandingSubtitle>Manage financial data using state-of-the-art AI models</GenericLandingSubtitle>
        </IndustryLandingWrapper>
    );
};

export default WealthPageLanding;
