import React from 'react';
import VSILanding from "../components/vsi-landing/vsi-landing.component";
import ChallengesTackled from "../components/challenges-tackled/challenges-tackled.component";
import Features from "../components/features/features.component";
import Advantages from "../components/advantages/advantages.component";
import SloganSection from "../components/slogan-section/slogan-section.component";
import InterestedThree from "../components/interested/interested-three.component";
import {Helmet} from "react-helmet";

const VirtualSystemsIntegrator = () => {

    const name = 'Virtual Systems Integrator';

    return (
        <>
            <Helmet>
                <title>4th-IR | Virtual Systems Integrator</title>
                <meta name="description" content="Expand the scope of Data lineage and reduce manual mapping" />
            </Helmet>
            <VSILanding/>
            <ChallengesTackled name={name} grid='2'/>
            <Features name={name}/>
            <Advantages num='3' name={name}/>
            <SloganSection name={name}/>
            <InterestedThree/>
        </>
    );
};

export default VirtualSystemsIntegrator;
