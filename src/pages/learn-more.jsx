import React from 'react';
import {VirtualTeamPageWrapper} from "../components/virtual-team-landing/virtual-team-landing.style";
import VirtualTeamLanding from "../components/virtual-team-landing/virtual-team-landing.component";
import ApproachVirtual from "../components/approach-virtual/approach.component";
import TransformBusiness from "../components/transform-business/transform-business.component";
import InnovativeEdge from "../components/innovative-edge/innovative-edge.component";
import Clients from "../components/clients/clients.component";
import InterestedTwo from "../components/interested/interested-two.component";
import {Helmet} from "react-helmet";

const LearnMore = () => {
    return (
        <VirtualTeamPageWrapper>
            <Helmet>
                <title>4th-IR | Build your own team</title>
                <meta name="description"
                      content=" There is more urgency for companies to automate and innovate in order to reap the benefits of a virtual workforce."/>
            </Helmet>
            <VirtualTeamLanding/>
            <ApproachVirtual/>
            <TransformBusiness/>
            <InnovativeEdge/>
            <Clients/>
            <InterestedTwo/>
        </VirtualTeamPageWrapper>
    );
};

export default LearnMore;
