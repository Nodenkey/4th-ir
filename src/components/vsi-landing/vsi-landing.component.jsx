import React from 'react';
import {
    Container,
    GenericLandingSubtitle,
    GenericLandingTitle, Image,
    VirtualBlueHeader, VirtualTeamWrapper
} from "../toolbelt/toolbelt.style";
import VSI from "../../assets/images/vsi.png";

const VSILanding = () => {
    return (
        <VirtualTeamWrapper num='2' gap='50px'>
            <Container>
                <VirtualBlueHeader>Virtual Systems Integrator</VirtualBlueHeader>
                <GenericLandingTitle>Expand the scope of Data lineage and reduce manual mapping</GenericLandingTitle>
                <GenericLandingSubtitle>The Virtual Systems Integrator applies AI to analyze the lineage and metadata,
                    mapping similar patterns in the data</GenericLandingSubtitle>
            </Container>
            <Image src={VSI} alt='Virtual Customer Assistant' wide='100%'/>
        </VirtualTeamWrapper>
    );
};

export default VSILanding;
