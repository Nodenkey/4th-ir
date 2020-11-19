import React from 'react';
import {
    Container,
    GenericLandingSubtitle,
    GenericLandingTitle, Image,
    VirtualBlueHeader, VirtualTeamWrapper
} from "../toolbelt/toolbelt.style";
import VCA from "../../assets/images/vca.png";


const VCALanding = () => {
    return (
        <VirtualTeamWrapper num='2' gap='50px'>
            <Container>
                <VirtualBlueHeader>Virtual Customer Assistant</VirtualBlueHeader>
                <GenericLandingTitle>Transform the Customer Experience</GenericLandingTitle>
                <GenericLandingSubtitle>Our Virtual Customer Assistant leverages data to transform engagement and manage
                    the
                    entire customer lifecycle; constantly acquiring knowledge about customer preferences and keeping up
                    with
                    ever-changing contexts.</GenericLandingSubtitle>
            </Container>
            <Image src={VCA} alt='Virtual Customer Assistant' wide='100%'/>
        </VirtualTeamWrapper>
    );
};

export default VCALanding;
