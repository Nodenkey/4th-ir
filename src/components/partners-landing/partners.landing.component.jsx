import React from 'react';
import PartnersImage from "../../assets/images/partners.png";
import {GenericLanding, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";

const PartnersLanding = () => {
    return (
        <GenericLanding img={PartnersImage}>
            <GenericLandingTitle>Our Partners</GenericLandingTitle>
            <GenericLandingSubtitle>We nurture a robust and innovative partner ecosystem in order to provide
                comprehensive AI-powered solutions throughout different industries. Our partners have an excellent
                reputation for longevity and stability in the market, enabling us to work together towards our joint
                mission.</GenericLandingSubtitle>
        </GenericLanding>
    );
};

export default PartnersLanding;
