import React from 'react';
import LawLanding from "../components/law-landing/law-landing.component";
import {Container} from "../components/toolbelt/toolbelt.style";
import LawTransformative from "../components/law-transformative/law-transformative.component";
import LawPotential from "../components/law-potential/law-potential.component";
import CaseStudy from "../components/case-study/case-study.component";
import InterestedTwo from "../components/interested/interested-two.component";
import {Helmet} from "react-helmet";
import IndustriesVirtualTeam from "../components/industries-virtual-team/industries-virtual-team.component";

const Attorneys = () => {
    return (
        <Container style={{backgroundColor: '#F1F1F1'}}>
            <Helmet>
                <title>4th-IR | Attorneys</title>
                <meta name="description"
                      content="Transform your legal practice with Artificial Intelligence"/>
            </Helmet>
            <LawLanding/>
            <LawTransformative/>
            <LawPotential/>
            <IndustriesVirtualTeam/>
            <CaseStudy/>
            <InterestedTwo/>
        </Container>
    );
};

export default Attorneys;
