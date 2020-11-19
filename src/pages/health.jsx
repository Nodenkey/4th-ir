import React from 'react';
import InterestedTwo from "../components/interested/interested-two.component";
import HealthPageLanding from "../components/healthpage-landing/healthpage-landing.component";
import {Container} from "../components/toolbelt/toolbelt.style";
import TransformativePower from "../components/transformative-power/transformative-power.component";
import HealthPotential from "../components/health-potential/health-potential.component";
import CaseStudy from "../components/case-study/case-study.component";
import {Helmet} from "react-helmet";
import IndustriesVirtualTeam from "../components/industries-virtual-team/industries-virtual-team.component";

const Health = () => {
    return (
        <Container style={{backgroundColor: '#F1F1F1'}}>
            <Helmet>
                <title>4th-IR | Health</title>
                <meta name="description"
                      content="Transform patient data into valuable information with Artificial Intelligence"/>
            </Helmet>
            <HealthPageLanding/>
            <TransformativePower/>
            <HealthPotential/>
            <IndustriesVirtualTeam/>
            <CaseStudy/>
            <InterestedTwo/>
        </Container>
    );
};

export default Health;
