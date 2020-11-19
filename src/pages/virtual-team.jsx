import React from 'react';
import VirtualTeamLanding from "../components/virtual-team-landing/virtual-team-landing.component";
import {VirtualTeamPageWrapper} from "../components/virtual-team-landing/virtual-team-landing.style";
import VirtualTeam from "../components/virtual-team-team/virtual-team.component";
import {Helmet} from "react-helmet";
import InterestedOne from "../components/interested/interested-one.component";
import BuildTeam from "../components/build-team/build-team.component";

const VirtualTeamPage = () => {

    return (
        <VirtualTeamPageWrapper>
            <Helmet>
                <title>4th-IR | Virtual Team</title>
                <meta name="description"
                      content="Transform your business with a custom-built Virtual Team."/>
            </Helmet>
            <VirtualTeamLanding/>
            <VirtualTeam/>
            <BuildTeam/>
            <InterestedOne/>
        </VirtualTeamPageWrapper>
    );
};

export default VirtualTeamPage;
