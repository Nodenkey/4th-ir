import React from 'react';
import ChallengesTackled from "../components/challenges-tackled/challenges-tackled.component";
import Features from "../components/features/features.component";
import Advantages from "../components/advantages/advantages.component";
import SloganSection from "../components/slogan-section/slogan-section.component";
import InterestedThree from "../components/interested/interested-three.component";
import VCPLanding from "../components/vcp-landing/vcp-landing.component";
import {Helmet} from "react-helmet";

const VirtualClaimsProcessor = () => {

    const name = 'Virtual Claims Processor';

    return (
        <>
            <Helmet>
                <title>4th-IR | Virtual Claims Processor</title>
                <meta name="description"
                      content="Automating Insurance Claims Processing"/>
            </Helmet>
            <VCPLanding/>
            <ChallengesTackled name={name} grid='1'/>
            <Features name={name}/>
            <Advantages num='3' name={name}/>
            <SloganSection name={name}/>
            <InterestedThree/>
        </>
    );
};

export default VirtualClaimsProcessor;
