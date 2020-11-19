import React from 'react';
import {
    Container,
    GenericLandingSubtitle,
    GenericLandingTitle, Image,
    VirtualBlueHeader, VirtualTeamWrapper
} from "../toolbelt/toolbelt.style";
import VCP from "../../assets/images/vcp.png";

const VCPLanding = () => {
    return (
        <VirtualTeamWrapper num='2' gap='50px'>
            <Container>
                <VirtualBlueHeader>Virtual Claims Processor</VirtualBlueHeader>
                <GenericLandingTitle>Automating Insurance Claims Processing</GenericLandingTitle>
                <GenericLandingSubtitle>The Virtual Claims Processor combines machine learning with computer vision to
                    automate insurance claims processing</GenericLandingSubtitle>
            </Container>
            <Image src={VCP} alt='Virtual Customer Assistant' wide='100%'/>
        </VirtualTeamWrapper>
    );
};

export default VCPLanding;
