import React from 'react';
import {ChallengeBannerTextContainer, ChallengeBar, ChallengesBannerWrapper} from "./challengesStyles";
import {GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";

const ChallengesBanner = () => {
    return (
        <>
            <ChallengesBannerWrapper>
                <ChallengeBannerTextContainer>
                    <GenericLandingTitle>4th-IR Innovation Challenges</GenericLandingTitle>
                    <GenericLandingSubtitle>The Virtual Systems Integrator applies AI to analyze the lineage and
                        metadata,
                        mapping similar patterns in the data</GenericLandingSubtitle>
                </ChallengeBannerTextContainer>
            </ChallengesBannerWrapper>
            <ChallengeBar>
                <GenericLandingSubtitle>Challenges open for application:</GenericLandingSubtitle>
            </ChallengeBar>
        </>
    );
};

export default ChallengesBanner;
