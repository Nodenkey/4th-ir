import React from 'react';
import {GenericLanding, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import TeamLandingImage from "../../assets/images/background_web.png";

const CaseStudyLanding = () => {
    return (
        <>
            <GenericLanding img={TeamLandingImage}>
                <GenericLandingTitle>Case Studies</GenericLandingTitle>
                <GenericLandingSubtitle>Our case studies showcase the professional and agile approach provided by
                    4th-IR. View our case studies to learn more about our solutions for specific
                    challenges.</GenericLandingSubtitle>
            </GenericLanding>
        </>
    );
};

export default CaseStudyLanding;
