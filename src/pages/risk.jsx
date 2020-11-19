import React from 'react';
import RiskPageLanding from "../components/risk-page-landing/risk-page-landing.component";
import RiskTransformative from "../components/risk-transformative/risk-transformative.component";
import CaseStudy from "../components/case-study/case-study.component";
import InterestedTwo from "../components/interested/interested-two.component";
import {Container} from "../components/toolbelt/toolbelt.style";
import RiskPotential from "../components/risk-potential/risk-potential.component";
import {Helmet} from "react-helmet";
import IndustriesVirtualTeam from "../components/industries-virtual-team/industries-virtual-team.component";

const Risk = () => {
    return (
        <Container style={{backgroundColor: '#F1F1F1'}}>
            <Helmet>
                <title>4th-IR | Risk</title>
                <meta name="description"
                      content="Reduce Risk with AI"/>
            </Helmet>
            <RiskPageLanding/>
            <RiskTransformative/>
            <RiskPotential/>
            <IndustriesVirtualTeam/>
            <CaseStudy/>
            <InterestedTwo/>
        </Container>
    );
};

export default Risk;
