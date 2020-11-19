import React from 'react';
import WealthPageLanding from "../components/wealth-page-landing/wealth-page-landing.component";
import {Container} from "../components/toolbelt/toolbelt.style";
import TransformativeWealth from "../components/transformative-wealth/transformative-power.component";
import WealthPotential from "../components/wealth-potential/wealth-potential.component";
import CaseStudy from "../components/case-study/case-study.component";
import InterestedTwo from "../components/interested/interested-two.component";
import {Helmet} from "react-helmet";
import IndustriesVirtualTeam from "../components/industries-virtual-team/industries-virtual-team.component";


const Wealth = () => {
    return (
        <Container style={{backgroundColor: '#F1F1F1'}}>
            <Helmet>
                <title>4th-IR | Wealth</title>
                <meta name="description" content="Artificial Intelligence 4 Wealth" />
            </Helmet>
            <WealthPageLanding/>
            <TransformativeWealth/>
            <WealthPotential/>
            <IndustriesVirtualTeam/>
            <CaseStudy/>
            <InterestedTwo/>
        </Container>
    );
};

export default Wealth;
