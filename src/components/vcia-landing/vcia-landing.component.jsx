import React from 'react';
import {
    Container,
    GenericLandingSubtitle,
    GenericLandingTitle, Image,
    VirtualBlueHeader, VirtualTeamWrapper
} from "../toolbelt/toolbelt.style";
import VCIA from "../../assets/images/vcia.png";

const VCIALanding = () => {
    return (
        <VirtualTeamWrapper num='2' gap='50px'>
            <Container>
                <VirtualBlueHeader>Virtual Clinical Imaging Analyst</VirtualBlueHeader>
                <GenericLandingTitle>Improve the accuracy of image analysis</GenericLandingTitle>
                <GenericLandingSubtitle>The Virtual Clinical Imaging Analyst applies deep learning algorithms that help
                    health specialists improve the speed and accuracy of interpreting diagnostic
                    images.</GenericLandingSubtitle>
            </Container>
            <Image src={VCIA} alt='Virtual Customer Assistant' wide='100%'/>
        </VirtualTeamWrapper>
    );
};

export default VCIALanding;
