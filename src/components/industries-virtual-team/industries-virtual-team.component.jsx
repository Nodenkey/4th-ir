import React from 'react';
import {VisionContainer, VisionWorkforceWrapper, WorkforceGrid} from "../vision-workforce/vision-workforce.style";
import {Image, PageHeader, TwentyEightText} from "../toolbelt/toolbelt.style";
import {Link} from "react-router-dom";
import VDS from "../../assets/images/vds.png";
import VCP from "../../assets/images/vcp.png";
import VSI from "../../assets/images/vsi.png";
import VCIA from "../../assets/images/vcia.png";
import VCA from "../../assets/images/vca.png";

const IndustriesVirtualTeam = () => {
    return (
        <VisionWorkforceWrapper>
            <PageHeader>Interested in creating your Virtual Workforce?</PageHeader>
            <PageHeader style={{fontWeight: 'normal'}}>Our Virtual Team</PageHeader>
            <WorkforceGrid>
                <Link to='/vds'><VisionContainer>
                    <Image src={VDS} wide='70%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Data Steward</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vcp'><VisionContainer>
                    <Image src={VCP} wide='70%'/>
                   <TwentyEightText style={{fontWeight: 600}}>Virtual Claims Processor</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vca'><VisionContainer>
                    <Image src={VCA} wide='70%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Customer Assistant</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vsi'><VisionContainer>
                    <Image src={VSI} wide='70%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual System Integrator</TwentyEightText>
                </VisionContainer></Link>
                <Link to='/vcia'><VisionContainer>
                    <Image src={VCIA} wide='70%'/>
                    <TwentyEightText style={{fontWeight: 600}}>Virtual Clinical Imaging Analyst</TwentyEightText>
                </VisionContainer></Link>
            </WorkforceGrid>
        </VisionWorkforceWrapper>
    );
};

export default IndustriesVirtualTeam;
