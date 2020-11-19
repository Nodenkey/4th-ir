import React from 'react';
import {
    GenericLandingSubtitle,
    GenericLandingTitle, IndustryLandingWrapper,
} from "../toolbelt/toolbelt.style";
import {IndustryLandingHeader} from "../toolbelt/toolbelt.component";

const HealthPageLanding = () => {
    return (
        <IndustryLandingWrapper img='health'>
                <IndustryLandingHeader industry='health'/>
                <GenericLandingTitle>Artificial Intelligence 4 Health</GenericLandingTitle>
                <GenericLandingSubtitle>Transform patient data into valuable information with <br/> <span
                    style={{fontWeight: '500'}}>Artificial Intelligence </span></GenericLandingSubtitle>
        </IndustryLandingWrapper>
    );
};

export default HealthPageLanding;
