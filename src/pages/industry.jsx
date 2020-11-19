import React from 'react';
import IndustryLanding from "../components/industry-landing/industry-landing.component";
import IndustryCards from "../components/industry-cards/industry-cards.component";
import InterestedOne from "../components/interested/interested-one.component";
        
const IndustryPage = () => {
    return (
        <>
            <IndustryLanding/>
            <IndustryCards/>
            <InterestedOne/>
        </>
    );
};

export default IndustryPage;
