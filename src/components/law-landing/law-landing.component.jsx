import React from 'react';
import {GenericLandingSubtitle, GenericLandingTitle, IndustryLandingWrapper} from "../toolbelt/toolbelt.style";
import {IndustryLandingHeader} from "../toolbelt/toolbelt.component";

const LawLanding = () => {
    return (
        <IndustryLandingWrapper img='law' overlay='.7'>
            <IndustryLandingHeader industry='legal'/>
            <GenericLandingTitle>Artificial Intelligence 4 Legal</GenericLandingTitle>
            <GenericLandingSubtitle>Transform your legal practice with Artificial Intelligence</GenericLandingSubtitle>
        </IndustryLandingWrapper>
    );
};

export default LawLanding;
