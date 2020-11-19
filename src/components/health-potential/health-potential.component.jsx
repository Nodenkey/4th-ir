import React from 'react';
import {PotentialGrid, PotentialWrapper} from "./health-potential.style";
import {Container, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import {TransformativeImage} from "../transformative-power/transformative-power.style";
import Eye from "../../assets/images/eye.svg";
import Precision from "../../assets/images/precision.svg";
import Bolt from "../../assets/images/bolt.svg";
import Focus from "../../assets/images/focus.svg";
import Gene from "../../assets/images/gene.svg";
import Gauge from "../../assets/images/patient.svg";



const HealthPotential = () => {
    return (
        <PotentialWrapper>
            <Container style={{maxWidth: '75%', margin: '0 auto'}}>
                <GenericLandingTitle>Unleash the full potential of AI 4 Health</GenericLandingTitle>
                <GenericLandingSubtitle style={{marginTop: '20px'}}>Improve Care Delivery and Patient Satisfaction,
                    Increase Employee Productivity and
                    reduce Operational Costs</GenericLandingSubtitle>
            </Container>
            <PotentialGrid>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Eye} alt='Eye under lens'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Enhanced/Augmented
                        Diagnosis</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI models analyze complex structured and unstructured medical data sets
                        (radiology images, blood tests, EKGs, genomics, patient medical history) to support clinician
                        decision-making.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Precision} alt='precision medicine'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Precision Medicine</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Taking advantage of advanced AI algorithms, physicians and researchers can
                        design and optimize a customized pathway for diagnosis, therapeutic intervention, and
                        prognosis.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Gauge} alt='gauge'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Patient Experience</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Patients have more options and better control over how they schedule
                        appointments and interact with their doctors.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Gene} alt='amoeba under lens'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Gene analysis</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Advanced analytical methods are applied for complex data mining, identifying
                        patterns and automating the entire process – making it possible to obtain whole-genome test
                        results faster than through manual labor.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Bolt} alt='machine'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Claims Processing</GenericLandingSubtitle>
                    <GenericLandingSubtitle>By combining robotic process automation (RPA) with machine learning (ML) and
                        computer vision (CV) much of claims processing can be automated while reducing billing errors
                        that require costly rework.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Focus} alt='focused eye'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Vendor Contract
                        Management</GenericLandingSubtitle>
                    <GenericLandingSubtitle>An AI-powered virtual contract manager helps staff manage a robust
                        repository, enabling health systems to better assess risk, capture savings, manage supplier
                        relationships and increase compliance.</GenericLandingSubtitle>
                </Container>
            </PotentialGrid>
        </PotentialWrapper>
    );
};

export default HealthPotential;
