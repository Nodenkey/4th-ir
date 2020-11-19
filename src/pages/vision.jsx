import React from 'react';
import VisionPageLanding from "../components/vision-page-landing/vision-page-landing.component";
import VisionJourney from "../components/vision-journey/vision-journey.component";
import InterestedTwo from "../components/interested/interested-two.component";
import VisionMission from "../components/vision-mission/vision-mission.component";
import VisionCollaboration from "../components/vision-collaboration/vision-collaboration.component";
import VisionDisruptive from "../components/vision-disruptive/vision-disruptive.component";
import VisionWorkforce from "../components/vision-workforce/vision-workforce.component";
import {Helmet} from "react-helmet";

const Vision = () => {
    return (
        <>
            <Helmet>
                <title>4th-IR | Vision</title>
                <meta name="description"
                      content="Humans and machines are joining forces leading to a safer, more sustainable and productive world."/>
            </Helmet>
            <VisionPageLanding/>
            <VisionJourney/>
            <VisionMission/>
            <VisionCollaboration/>
            <VisionWorkforce/>
            <VisionDisruptive/>
            <InterestedTwo/>
        </>
    );
};

export default Vision;
