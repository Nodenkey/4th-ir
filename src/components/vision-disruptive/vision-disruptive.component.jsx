import React from 'react';
import {VisionJourneyWrapper} from "../vision-journey/vision-journey.style";
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {
    AIFeatureContainer,
    AIFeaturesWrapper,
    FeatureContainer,
    FeatureText,
    FeatureTitle
} from "./vision-disruptive.style";
import {Band} from "../vision-mission/vision-mission.style";

const VisionDisruptive = () => {
    return (
        <>
            <VisionJourneyWrapper>
                <PageHeader>The disruptive power of Artificial Intelligence</PageHeader>
                <PageSubHeaderAlt>The development of strong AI capabilities is imperative to staying competitive in
                    today’s
                    unprecedented times. The pressure to innovate is apparent as companies aim to gain competitive
                    advantage
                    and there are opportunities for AI adoption throughout different industries.</PageSubHeaderAlt>
            </VisionJourneyWrapper>
            <AIFeaturesWrapper>
                <FeatureContainer>
                    <AIFeatureContainer>
                        <FeatureTitle>AI is embraced by innovative companies</FeatureTitle>
                        <FeatureText>The most innovative companies are leveraging Artificial Intelligence in order to
                            capitalize and benefit from opportunities in the market. Companies that embrace AI today
                            will
                            thrive in an environment or industry niche tomorrow.</FeatureText>
                    </AIFeatureContainer>
                    <Band/>
                </FeatureContainer>
                <FeatureContainer>
                    <Band/>
                    <AIFeatureContainer>
                        <FeatureTitle>AI creates competitive advantage</FeatureTitle>
                        <FeatureText>AI improves the productivity of employees and impacts different sectors within an
                            organization – increasing revenue and creating competitive advantage. The practical
                            advantage of
                            AI is evident as only one automated daily task will result in overall
                            innovation.</FeatureText>
                    </AIFeatureContainer>
                </FeatureContainer>
                <FeatureContainer>
                    <Band/>
                    <AIFeatureContainer>
                        <FeatureTitle>AI is accessible and useful for everyone</FeatureTitle>
                        <FeatureText>Companies are aligning their long-term business strategy with today’s AI
                            opportunities.
                            The AI-powered future is beneficial not only for large corporations or SMEs, but because it
                            has
                            a global and cross-cultural impact throughout different segments of society.</FeatureText>
                    </AIFeatureContainer>
                </FeatureContainer>
            </AIFeaturesWrapper>
        </>
    );
};

export default VisionDisruptive;
