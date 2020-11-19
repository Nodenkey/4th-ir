import React from 'react';
import {IndustryLandingHeader} from "../toolbelt/toolbelt.component";
import {GenericLandingSubtitle, GenericLandingTitle, IndustryLandingWrapper} from "../toolbelt/toolbelt.style";

const RiskPageLanding = () => {
    return (
        <IndustryLandingWrapper img='risk'>
            <IndustryLandingHeader industry='risk'/>
            <GenericLandingTitle>Reduce Risk with AI</GenericLandingTitle>
            <GenericLandingSubtitle>Improve risk management with Artificial Intelligence</GenericLandingSubtitle>
        </IndustryLandingWrapper>
    );
};

export default RiskPageLanding;
