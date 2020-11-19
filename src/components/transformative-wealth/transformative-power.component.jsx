import React from 'react';
import {
    TransformativeContainer, TransformativeImage, TransformativeText,
    TransformativeTextContainer, TransformativeTitle,
    TransformativeWrapper
} from "../transformative-power/transformative-power.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import Lock from "../../assets/images/lock.svg";
import Box from "../../assets/images/box.svg";
import Bank from "../../assets/images/bank.svg";


const TransformativeWealth = () => {
    return (
        <TransformativeWrapper>
            <PageHeader>The transformative power of AI <LogoOne/> the financial ecosystem</PageHeader>
            <Container>
                <TransformativeContainer>
                    <TransformativeImage src={Lock} alt='lock'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Security risk management</TransformativeTitle>
                        <TransformativeText>Cyber risk and fraud is at the center stage of the financial sector as
                            governments and institutions have increased their investments in security risk management.
                            Artificial Intelligence efficiently detects and responds to threats – facilitating and
                            enhancing economic processes and enabling financial stability.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Box} alt='box'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Investment opportunities</TransformativeTitle>
                        <TransformativeText>AI helps update large volumes of data in real-time, thus opening up
                            opportunities for investors that were not foreseen. Innovative tools such as chatbots and
                            virtual advisors based on machine learning algorithms enable a better customer experience
                            and unparalleled performance.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
                <TransformativeContainer>
                    <TransformativeImage src={Bank} alt='bank'/>
                    <TransformativeTextContainer>
                        <TransformativeTitle>Smarter credit processes</TransformativeTitle>
                        <TransformativeText>Analysis of credit risk by assessing an individual’s payment history,
                            behavioral patterns, and demographics has become an outdated traditional credit scoring
                            method. Artificial Intelligence, enables credit institutions to take into account the
                            underlying hidden factors in order to determine a client’s credit score
                            accurately.</TransformativeText>
                    </TransformativeTextContainer>
                </TransformativeContainer>
            </Container>
        </TransformativeWrapper>
    );
};

export default TransformativeWealth;
