import React from 'react';
import VCALanding from "../components/vca-landing/vca-landing.component";
import ChallengesTackled from "../components/challenges-tackled/challenges-tackled.component";
import SloganSection from "../components/slogan-section/slogan-section.component";
import InterestedThree from "../components/interested/interested-three.component";
import Advantages from "../components/advantages/advantages.component";
import Features from "../components/features/features.component";
import {Helmet} from "react-helmet";

const VirtualCustomerAssistant = () => {

    const name = 'Virtual Customer Assistant';
    return (
        <>
            <Helmet>
                <title>4th-IR | Virtual Customer Assistant</title>
                <meta name="description"
                      content="Transform the Customer Experience"/>
            </Helmet>
            <VCALanding/>
            <ChallengesTackled name={name} grid='1'/>
            <Features name={name}/>
            <Advantages num='3' name={name}/>
            <SloganSection name={name}/>
            <InterestedThree/>
        </>
    );
};

export default VirtualCustomerAssistant;
