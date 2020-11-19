import React from 'react';
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import {
    TransformativeContainer,
    TransformativeImage, TransformativeText,
    TransformativeTextContainer, TransformativeTitle, TransformativeWrapper
} from "../transformative-power/transformative-power.style";
import Lock from "../../assets/images/lock.svg";
import Box from "../../assets/images/box.svg";
import Bank from "../../assets/images/bank.svg";

const RiskTransformative = () => {
    return (
        <TransformativeWrapper>
            <PageHeader>The transformative power of AI <LogoOne/> the Insurance sector</PageHeader>
            <Container>
                <TransformativeContainer>
                    <TransformativeImage src={Box} alt='box'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>The customer experience</TransformativeTitle>
                        <TransformativeText>AI has enhanced the customer experience as real-time data is available to
                            develop personalized products for customers and automation processes improve the customer
                            experience. Companies are able to effectively respond to market needs and enhance
                            productivity.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Lock} alt='lock'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Fraud prevention</TransformativeTitle>
                        <TransformativeText>Insurance companies are using Artificial Intelligence techniques like
                            anomaly detection and predictive analytics to detect and manage insurance fraud. Insurers
                            can evaluate millions of data points, search for patterns and detect
                            fraud.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Bank} alt='bank'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Claims processing</TransformativeTitle>
                        <TransformativeText>AI-based automated classification is more accurate than manual
                            classification and has the potential to increase productivity exponentially. AI can also
                            help improve turnaround time for claims processing through pattern identification of data,
                            reducing operational costs.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
            </Container>
        </TransformativeWrapper>
    );
};

export default RiskTransformative;
