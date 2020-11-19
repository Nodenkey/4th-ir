import React from 'react';
import {PotentialGrid, PotentialWrapper} from "../health-potential/health-potential.style";
import {Container, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import {TransformativeImage} from "../transformative-power/transformative-power.style";
import Tax from "../../assets/images/tax.svg";
import Speed from "../../assets/images/speed.svg";
import Checklist from "../../assets/images/checklist.svg";
import Money from "../../assets/images/money.svg";
import Coins from "../../assets/images/coins.svg";
import Calculator from "../../assets/images/calculator.svg";


const WealthPotential = () => {
    return (
        <PotentialWrapper>
            <Container style={{maxWidth: '75%', margin: '0 auto'}}>
                <GenericLandingTitle>Unleash the full potential of AI 4 Wealth</GenericLandingTitle>
                <GenericLandingSubtitle style={{marginTop: '20px'}}>Increase Client Loyalty, Empower Employee
                    Productivity, reduce Costs and Risks/GenericLandingSubtitle</GenericLandingSubtitle>
            </Container>
            <PotentialGrid>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Tax} alt='tax'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Financial analytics</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Automate Business Intelligence solutions for more efficient financial data
                        monitoring.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Speed} alt='speedometer'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Credit scoring</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Quickly and accurately assess borrowers. AI and ML algorithms connect data
                        points to introduce more assessment factors, eliminate bias, and improve the approval
                        process.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Checklist} alt='checklist'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Fraud detection</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI and ML algorithms can detect suspicious activity and credit card fraud,
                        while ensuring data safety and customer trust.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Money} alt='money'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Online trading platforms</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI’s pattern detecting capability allows traders to develop smarter trading
                        strategies - predicting trading opportunities by automating data
                        analysis.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Coins} alt='coins'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Personalized wealth
                        management</GenericLandingSubtitle>
                    <GenericLandingSubtitle>AI and ML algorithms create tailored financial solutions in order to track
                        the habits of clients and analyze stock portfolios more efficiently.</GenericLandingSubtitle>
                </Container>
                <Container>
                    <TransformativeImage style={{marginRight: 0}} src={Calculator} alt='calculator'/>
                    <GenericLandingSubtitle style={{fontWeight: 600}}>Customer retention</GenericLandingSubtitle>
                    <GenericLandingSubtitle>Intelligent tools powered by AI are used to forecast customer behavior and
                        promote retention.</GenericLandingSubtitle>
                </Container>
            </PotentialGrid>
        </PotentialWrapper>
    );
};

export default WealthPotential;
