import React from 'react';
import {Flex, IndustryLandingHeaderWrapper, IndustryLandingTitle} from "./toolbelt.style";
import {LogoOne} from "../svg/svg.component";

export const IndustryLandingHeader = ({industry}) => {
    return (
        <IndustryLandingHeaderWrapper>
            <LogoOne/>
            <IndustryLandingTitle>{industry}</IndustryLandingTitle>
        </IndustryLandingHeaderWrapper>
    );
};

export const TwoRowImage = ({image, name}) => {
    return (
        <Flex center>
            <img src={image} alt={name} style={{maxWidth: 200}}/>
        </Flex>
    )
}

