import React from 'react';
import ChallengesTackled from "../components/challenges-tackled/challenges-tackled.component";
import Features from "../components/features/features.component";
import Advantages from "../components/advantages/advantages.component";
import SloganSection from "../components/slogan-section/slogan-section.component";
import InterestedThree from "../components/interested/interested-three.component";
import VDSLanding from "../components/vds-landing/vds-landing.component";
import {Helmet} from "react-helmet";

const VirtualDataSteward = () => {

    const name = 'Virtual Data Steward';
    return (
        <>
            <Helmet>
                <title>4th-IR | Virtual Data Steward</title>
                <meta name="description"
                      content="Enhance the quality, value, and trustworthiness of your data."/>
            </Helmet>
            <VDSLanding/>
            <ChallengesTackled name={name} grid='2'/>
            <Features name={name}/>
            <Advantages num='3' name={name}/>
            <SloganSection name={name}/>
            <InterestedThree/>
        </>
    );
};

export default VirtualDataSteward;
