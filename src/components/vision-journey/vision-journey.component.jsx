import React from 'react';
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {VisionJourneyWrapper} from "./vision-journey.style";

const VisionJourney = () => {
    return (
        <VisionJourneyWrapper>
            <PageHeader>Our Journey</PageHeader>
            <PageSubHeaderAlt>Fourth-IR was established in 2016 to lead the cognitive revolution with experts familiar
                with transformational change. The 4th Industrial Revolution is evolving at an exponential pace and is
                disrupting almost every industry in every country - characterized by a fusion of technologies that blurs
                the lines between the physical, digital, and biological spheres.</PageSubHeaderAlt>
        </VisionJourneyWrapper>
    );
};

export default VisionJourney;
