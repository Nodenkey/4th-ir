import React from 'react';
import {GenericLanding, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import TeamLandingImage from "../../assets/images/background_web.png";

const TeamLanding = () => {
    return (
        <>
            <GenericLanding img={TeamLandingImage}>
                <GenericLandingTitle>Our Team</GenericLandingTitle>
                <GenericLandingSubtitle>Our Team strives towards going beyond innovation, exploring what is next in
                    Artificial Intelligence and pushing the boundaries by developing cutting-edge ideas and
                    technology.</GenericLandingSubtitle>
            </GenericLanding>
        </>
    );
};

export default TeamLanding;
