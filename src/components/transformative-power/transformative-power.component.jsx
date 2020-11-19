import React from 'react';
import {
    TransformativeContainer, TransformativeImage, TransformativeText,
    TransformativeTextContainer, TransformativeTitle,
    TransformativeWrapper
} from "./transformative-power.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import Lock from "../../assets/images/lock.svg";
import Box from "../../assets/images/box.svg";
import Hospital from "../../assets/images/hospital.svg";



const TransformativePower = () => {
    return (
        <TransformativeWrapper>
            <PageHeader>The transformative power of AI <LogoOne/> Healthcare</PageHeader>
            <Container>
                <TransformativeContainer>
                    <TransformativeImage src={Lock} alt='lock'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Enhanced data protection and diminished paperwork
                            burden</TransformativeTitle>
                        <TransformativeText>Artificial intelligence is enabling healthcare providers detect
                            vulnerabilities and respond to data breaches faster and with greater precision. Human error,
                            theft or misuse can be avoided by implementing AI-powered solutions and Electronic Health
                            Records create safe and personalized care options.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Box} alt='box'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Intuitive and Predictive capabilities</TransformativeTitle>
                        <TransformativeText>Healthcare specialists can benefit greatly from algorithms that interpret
                            data in the form of computer vision, sound and text recognition, and natural language
                            processing. Preventive Medicine is enabled by using predictive software instead of following
                            a routine checklist prone to human error and misuse.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Hospital} alt='hospital'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Medical facility performance</TransformativeTitle>
                        <TransformativeText>Efficiently running a medical facility is complex and prone to human-errors.
                            AI-powered software enables healthcare specialists to interpret data and make better
                            decisions, increasing productivity and saving time in order to focus attention on critical
                            patient-centric solutions.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
            </Container>
        </TransformativeWrapper>
    );
};

export default TransformativePower;
