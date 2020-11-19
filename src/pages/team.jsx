import React from 'react';
import TeamLanding from "../components/team-landing/team-landing.component";
import InterestedTwo from "../components/interested/interested-two.component";
import TeamMembers from "../components/team-members/team-members.component";
import {Helmet} from "react-helmet";
import CareerOpportunities from "../components/career-opportunities/career-opportunities.component";
import TeamFeatures from "../components/team-features/team-features.component";

const Team = () => {
    return (
        <>
            <Helmet>
                <title>4th-IR | Team</title>
                <meta name="description"
                      content="Building the virtual workforce of the future."/>
            </Helmet>
            <TeamLanding/>
            <TeamMembers/>
            <TeamFeatures/>
            <CareerOpportunities/>
            <InterestedTwo/>
        </>
    );
};

export default Team;
