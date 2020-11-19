import React from 'react';
import HomeLanding from "../components/home-landing/home-landing.component";
import VirtualTeam from "../components/virtual-team-home/virtual-team.component";
import BuildTeam from "../components/build-team/build-team.component";
import HomeIndustry from "../components/home-industry/home-industry.component";
import InterestedOne from "../components/interested/interested-one.component";
import {Helmet} from "react-helmet";


const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>4th-IR</title>
                <meta name="description" content="Building the virtual workforce of the future." />
            </Helmet>
         <HomeLanding/>
         <VirtualTeam/>
         <BuildTeam/>
         <HomeIndustry/>
         <InterestedOne/>
        </>
    );
};

export default HomePage;
