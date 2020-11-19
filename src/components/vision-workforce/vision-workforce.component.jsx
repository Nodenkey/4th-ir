import React from 'react';
import {VisionContainer, VisionWorkforceWrapper, WorkforceGrid} from "./vision-workforce.style";
import {Image, PageHeader, PageSubHeaderAlt, TwentyEightText} from "../toolbelt/toolbelt.style";
import Robot from "../../assets/images/bot.png";
import {Link} from "react-router-dom";

const VisionWorkforce = () => {
    return (
        <VisionWorkforceWrapper>
            <PageHeader>The Virtual Workforce of the Future</PageHeader>
            <PageSubHeaderAlt>We’re unlocking the collaborative intelligence between humans and machines to transform
                the future of work, so every company achieves competitive advantage by leveraging Artificial
                Intelligence.</PageSubHeaderAlt>
            <WorkforceGrid>
                <Link to='/vds'><VisionContainer>
                    <Image src={Robot} wide='80%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Data Steward</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vcp'><VisionContainer>
                    <Image src={Robot} wide='80%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Claims Processor</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vca'><VisionContainer>
                   <Image src={Robot} wide='80%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Customer Assistant</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vsi'><VisionContainer>
                    <Image src={Robot} wide='80%'/>
                   <TwentyEightText style={{fontWeight: 600}}>Virtual System Integrator</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vcia'><VisionContainer>
                    <Image src={Robot} wide='80%'/>
                   <TwentyEightText style={{fontWeight: 600}}>Virtual Clinical Imaging Analyst</TwentyEightText>
                </VisionContainer></Link>
            </WorkforceGrid>
        </VisionWorkforceWrapper>
    );
};

export default VisionWorkforce;
