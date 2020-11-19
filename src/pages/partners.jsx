import React from 'react';
import PartnersLanding from "../components/partners-landing/partners.landing.component";
import InterestedPartner from "../components/interested/interested-partner";
import StrategicPartners from "../components/strategic-partners/strategic-partners.component";
import TechnologyPartners from "../components/partners-technology/technology-partners.component";
import {Helmet} from "react-helmet";
import Recognition from "../components/recognition/recognition.component";
import PartnersAffiliation from "../components/partners-affiliation/partners-affiliation";
import OtherPartners from "../components/other-partners/otherPartners";

const Partners = () => {
    return (
        <>
            <Helmet>
                <title>4th-IR | Partners</title>
                <meta name="description"
                      content="We nurture a robust and innovative partner ecosystem in order to provide comprehensive AI-powered solutions throughout different industries."/>
            </Helmet>
            <PartnersLanding/>
            <StrategicPartners/>
            <TechnologyPartners/>
            <OtherPartners/>
            <PartnersAffiliation/>
            <Recognition/>
            <InterestedPartner/>
        </>
    );
};

export default Partners;
