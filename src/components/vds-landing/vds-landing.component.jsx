import React from 'react';
import {
    Container,
    GenericLandingSubtitle,
    GenericLandingTitle, Image,
    VirtualBlueHeader, VirtualTeamWrapper
} from "../toolbelt/toolbelt.style";
import VDS from "../../assets/images/vds.png";

const VDSLanding = () => {
    return (
        <VirtualTeamWrapper num='2' gap='50px'>
            <Container>
                <VirtualBlueHeader>Virtual Data Steward</VirtualBlueHeader>
                <GenericLandingTitle>Enhance the quality, value, and trustworthiness of your data</GenericLandingTitle>
                <GenericLandingSubtitle>The Virtual Data Steward implements smart data modeling scalable to the entire
                    data
                    landscape, automating complex tasks and improving overall accuracy of the identified data.
                    Unstructured
                    information is turned into structured data through the process of identifying data elements,
                    defining
                    variables and assigning their values.</GenericLandingSubtitle>
            </Container>
            <Image src={VDS} alt='Virtual Customer Assistant' wide='100%'/>
        </VirtualTeamWrapper>
    );
};

export default VDSLanding;
