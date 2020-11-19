import React from 'react';
import {Container, PageHeader}from "../toolbelt/toolbelt.style";
import Asg from "../../assets/images/asg2.png";
import Apteryx from "../../assets/images/apteryx.png";
import Virtuleap from "../../assets/images/virtuleap.png";
import TwoRow from "../partners-two-row/partners-two-row.component";

const TechnologyPartners = () => {
    return (
        <Container style={{padding: '50px 5vw'}}>
            <PageHeader>OUR TECHNOLOGY PARTNERS</PageHeader>
            <TwoRow image={Asg} imageAlt='asg technologies'
                    paragraphOne='ASG is a Global Enterprise Software vendor providing solutions for some of the world’s largest businesses. ASG is the only solutions provider for both Information Management and IT Systems Management.'
            />
            <TwoRow image={Apteryx} imageAlt='apteryx imaging'
                    paragraphOne='Apteryx Imaging has provided dentists and oral health specialists with advanced diagnostic imaging software and device technologies for over 20 years.'
            />
            <TwoRow image={Virtuleap} imageAlt='virtuleap'
                    paragraphOne='Virtuleap is a health and education VR startup based in Lisbon, Portugal. Virtuleap combines neuroscience and virtual reality to help increase attention levels, and address cognitive illnesses, disorders, and learning challenges.'
            />
        </Container>
    );
};

export default TechnologyPartners;



