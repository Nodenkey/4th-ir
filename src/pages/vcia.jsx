import React from 'react';
import VCIALanding from "../components/vcia-landing/vcia-landing.component";
import ChallengesTackled from "../components/challenges-tackled/challenges-tackled.component";
import SloganSection from "../components/slogan-section/slogan-section.component";
import InterestedThree from "../components/interested/interested-three.component";
import Advantages from "../components/advantages/advantages.component";
import Features from "../components/features/features.component";
import {Helmet} from "react-helmet";

const VirtualImaging = () => {

    const name = 'Virtual Clinical Imaging Analyst';
    return (
        <>
            <Helmet>
                <title>4th-IR | Virtual Clinical Imaging Assistant</title>
                <meta name="description"
                      content="Improve the accuracy of image analysis"/>
            </Helmet>
            <VCIALanding/>
            <ChallengesTackled name={name} grid='1'/>
            <Features name={name}/>
            <Advantages num='2' name={name}/>
            <SloganSection name={name}/>
            <InterestedThree/>
        </>
    );
};

export default VirtualImaging;
