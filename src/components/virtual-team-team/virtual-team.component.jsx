import React from 'react';
import {Container, Image, PageHeader, PageSubHeaderAlt, TwentyEightText} from "../toolbelt/toolbelt.style";
import {VisionContainer, VisionWorkforceWrapper, WorkforceGrid} from "../vision-workforce/vision-workforce.style";
import VDS from "../../assets/images/vds.png";
import VCP from "../../assets/images/vcp.png";
import VSI from "../../assets/images/vsi.png";
import VCIA from "../../assets/images/vcia.png";
import VCA from "../../assets/images/vca.png";
import {Link} from "react-router-dom";

const VirtualTeam = () => {
    return (
        <>
            <Container style={{padding: '50px 5vw 0'}}>
                <PageSubHeaderAlt>Our Virtual Team members are AI-driven products that can easily integrate with your
                    processes and strategy or we can work together to create products tailored to fit your
                    business.</PageSubHeaderAlt>
                <PageHeader style={{marginTop: 50}}>The Virtual Team</PageHeader>
            </Container>
            <VisionWorkforceWrapper>
                <PageSubHeaderAlt>We’re unlocking the collaborative intelligence between humans and machines to
                    transform
                    the future of work, so every company achieves competitive advantage by leveraging Artificial
                    Intelligence.</PageSubHeaderAlt>
                <WorkforceGrid>
                    <Link to='/vds'><VisionContainer>
                        <Image src={VDS} wide='80%'/>
                        <TwentyEightText style={{fontWeight: 600}}>Virtual Data Steward</TwentyEightText>
                    </VisionContainer></Link>
                    <Link to='/vcp'><VisionContainer>
                        <Image src={VCP} wide='80%'/>
                        <TwentyEightText style={{fontWeight: 600}}>Virtual Claims Processor</TwentyEightText>
                    </VisionContainer></Link>
                    <Link to='/vca'><VisionContainer>
                        <Image src={VCA} wide='80%'/>
                        <TwentyEightText style={{fontWeight: 600}}>Virtual Customer Assistant</TwentyEightText>
                    </VisionContainer></Link>
                    <Link to='/vsi'><VisionContainer>
                        <Image src={VSI} wide='80%'/>
                        <TwentyEightText style={{fontWeight: 600}}>Virtual System Integrator</TwentyEightText>
                    </VisionContainer></Link>
                    <Link to='/vcia'><VisionContainer>
                        <Image src={VCIA} wide='80%'/>
                        <TwentyEightText style={{fontWeight: 600}}>Virtual Clinical Imaging Analyst</TwentyEightText>
                    </VisionContainer></Link>
                </WorkforceGrid>
            </VisionWorkforceWrapper>
        </>
    );
};

export default VirtualTeam;
