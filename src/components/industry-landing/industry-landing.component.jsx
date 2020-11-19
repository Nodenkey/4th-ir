import React from 'react';
import IndustryImage from "../../assets/images/background_web.png";
import {GenericLanding, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import {IndustryLandingWrapper} from "./industry-landing.style";

const IndustryLanding = () => {
    return (
        <IndustryLandingWrapper>
            <GenericLanding img={IndustryImage} style={{minHeight: '40vh'}}>
                <GenericLandingTitle>Make AI work <LogoOne/>your Industry</GenericLandingTitle>
            </GenericLanding>
        </IndustryLandingWrapper>
    );
};

export default IndustryLanding;
