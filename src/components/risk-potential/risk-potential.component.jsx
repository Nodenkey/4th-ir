import React from 'react';
import {Container, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import {PotentialGrid, PotentialWrapper} from "../health-potential/health-potential.style";
import {TransformativeImage} from "../transformative-power/transformative-power.style";
import Solution from "../../assets/images/solution.svg";
import Insurance from "../../assets/images/insurance.svg";
import Support from "../../assets/images/support.svg";
import Blockchain from "../../assets/images/blockchain.svg";
import Price from "../../assets/images/price.svg";

const RiskPotential = () => {
    return (
        <PotentialWrapper>
            <Container style={{maxWidth: '75%', margin: '0 auto'}}>
                <GenericLandingTitle>Unleash the full potential of AI 4 Risk</GenericLandingTitle>
                <GenericLandingSubtitle style={{marginTop: '20px'}}>Improve Risk Management with Artificial
                    Intelligence</GenericLandingSubtitle>
            </Container>
            <PotentialGrid>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Solution} alt='solution'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Business Intelligence</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Use intelligent tools to mitigate risks, forecast consumer behavior,
                        implement investment strategies, and promote customer retention and marketing
                        initiatives.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Insurance} alt='insurance'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>AI and Predictive
                        Analytics</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI has opened up the opportunity to use Predictive Analytics in new ways to
                        improve the accuracy of data: identifying risk of fraud, pricing and risk selection, identifying
                        claims, and anticipating trends.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Support} alt='customer support'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Customer Engagement</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Virtual assistants and chatbots manage customer experience more effectively
                        and provide personalized services round the clock.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Blockchain} alt='blockchain'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Blockchain Technology</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI’s pattern detecting capability allows traders to develop smarter trading
                        strategies - predicting trading opportunities by automating data
                        analysis.</GenericLandingSubtitle>
                </Container>
            </PotentialGrid>
            <Container style={{
                maxWidth: 600,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '100px auto'
            }}>
                <TransformativeImage style={{marginRight: 0}} src={Price} alt='coin'/>
                <GenericLandingSubtitle style={{fontWeight: 600}}>Underwriting and Pricing</GenericLandingSubtitle>
                <GenericLandingSubtitle>Manual underwriting will cease to exist as the process is reduced to a few
                    seconds through AI-driven automation, and pricing is available in
                    real-time.</GenericLandingSubtitle>
            </Container>
        </PotentialWrapper>
    );
};

export default RiskPotential;
