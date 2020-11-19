import React from 'react';
import {Container, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import {PotentialGrid, PotentialWrapper} from "../health-potential/health-potential.style";
import {TransformativeImage} from "../transformative-power/transformative-power.style";
import Certified from "../../assets/images/certified.svg";
import Legal from "../../assets/images/law.svg";
import Gavel from "../../assets/images/gavel.svg";
import Contract from "../../assets/images/contract.svg";
import Person from "../../assets/images/person.svg";

const LawPotential = () => {
    return (
        <PotentialWrapper>
            <Container style={{maxWidth: '75%', margin: '0 auto'}}>
                <GenericLandingTitle>Unleash the full potential of AI 4 Legal</GenericLandingTitle>
                <GenericLandingSubtitle style={{marginTop: '20px'}}>Improve Contract Management, enhance Accuracy of
                    Legal Research and predict Litigation Outcomes</GenericLandingSubtitle>
            </Container>
            <PotentialGrid>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Certified} alt='certificate'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Contract management</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI-powered software has the potential to improve how companies contract – by
                        changing the tools used to contract and influencing the content of
                        contracts..</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Legal} alt='justice'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Legal research</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Legal research software uses artificial intelligence to enable lawyers to
                        work faster and smarter, improving the delivery of legal services.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Gavel} alt='gavel'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Litigation prediction</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI can analyze similar cases with similar facts and provide a statistical
                        analysis to predict litigation outcomes accurately, allowing attorneys to confidently advise
                        clients.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Contract} alt='contract'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Due Diligence</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Artificial intelligence empowers attorneys to manage their workloads and
                        protect their clients’ interests by reviewing more documents accurately in less
                        time.</GenericLandingSubtitle>
                </Container>
            </PotentialGrid>
            <Container style={{
                maxWidth: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '100px auto'
            }}>
                <TransformativeImage style={{marginRight: 0}} src={Person} alt='person'/>
                <GenericLandingSubtitle style={{fontWeight: 600}}>Virtual Lawyers</GenericLandingSubtitle>
                <GenericLandingSubtitle>Chatbots can offer legal advice as they are capable of carrying on full
                    conversations and share useful information.</GenericLandingSubtitle>
            </Container>
        </PotentialWrapper>
    );
};

export default LawPotential;
