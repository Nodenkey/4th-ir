import React from 'react';
import {
    TransformativeContainer,
    TransformativeImage, TransformativeText, TransformativeTextContainer, TransformativeTitle,
    TransformativeWrapper
} from "../transformative-power/transformative-power.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import Lock from "../../assets/images/lock.svg";
import Bank from "../../assets/images/bank.svg";
import Box from "../../assets/images/box.svg";

const LawTransformative = () => {
    return (
        <TransformativeWrapper>
            <PageHeader>The transformative power of AI <LogoOne/> for law firms</PageHeader>
            <Container>
                <TransformativeContainer>
                    <TransformativeImage src={Lock} alt='lock'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Improved Analytics</TransformativeTitle>
                        <TransformativeText>Analytics is one of the most important segments where AI is impacting how
                            law-firms operate in terms of time usage and billing accuracy. AI-powered analytics enables
                            law firms to accurately analyze the work and time efficiency carried out by lawyers on
                            specific tasks.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Bank} alt='building'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Automated Legal and Administrative Processes</TransformativeTitle>
                        <TransformativeText>Automated processes leverage the power of AI for tasks that do not require
                            the expertise of a lawyer. Tasks such as reviewing documents or performing research do not
                            require human work thanks to automated solutions.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Box} alt='box'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>The contract lifecycle management</TransformativeTitle>
                        <TransformativeText>AI is transforming the contract lifecycle management in the legal industry
                            by helping law firms extract data and clarify the content of contracts more accurately and
                            in a timely manner, adding value to the entire contract lifecycle.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
            </Container>
        </TransformativeWrapper>
    );
};

export default LawTransformative;
