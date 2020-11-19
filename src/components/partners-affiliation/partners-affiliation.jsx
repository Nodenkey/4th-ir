import React from 'react';
import {PageHeader} from "../toolbelt/toolbelt.style";
import TwoRow from "../partners-two-row/partners-two-row.component";
import {FlexImageContainer} from "../recognition/recognition.style";

const PartnersAffiliation = () => {
    return (
        <FlexImageContainer style={{padding: '50px 5vw'}}>
            <PageHeader>MEMBERSHIPS AND AFFILIATIONS</PageHeader>
            <TwoRow textReplace = 'Microsoft for Startups program'
                    paragraphOne='Microsoft for Startups is a global program designed to help startups scale with free access to Azure cloud and a streamlined path into selling alongside Microsoft and their vast partner ecosystem.'
            />
            <TwoRow textReplace = 'NVIDIA Inception Program 2019'
                    paragraphOne='The NVIDIA Inception Program nurtures cutting-edge AI startups who are revolutionizing industries. This virtual accelerator offers go-to-market support, expertise, and technology for program members through deep learning training, exclusive Inception events, GPU discounts, and more.'
            />
        </FlexImageContainer>
    );
};

export default PartnersAffiliation;
