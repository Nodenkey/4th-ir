import React from 'react';
import {
    FeatureContainer,
    FeatureCube,
    FeatureHeader,
    FeatureMain,
    FeaturesWrapper, FeatureText,
    IndividualFeature, Line
} from "./features.styles";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {pageDetails} from "../../utils/page-docs";

const Features = ({name}) => {
    let featureList = [];

    pageDetails.forEach(detail => {
        if (detail.name === name) {
            featureList = detail.features;
        }
    })
    return (
        <FeaturesWrapper>
            <PageHeader>Features</PageHeader>
            <FeatureMain>
                {
                    featureList.map(feature =>
                        <FeatureContainer key={feature.id}>
                            <IndividualFeature>
                                <Line/>
                                <FeatureCube src={require(`../../assets/images/${feature.cube}`)} alt='feature'/>
                                <Container>
                                    <FeatureHeader>{feature.title}</FeatureHeader>
                                    <FeatureText style={{width: '100%'}}>{feature.explain}</FeatureText>
                                </Container>
                            </IndividualFeature>
                        </FeatureContainer>
                    )
                }
            </FeatureMain>
        </FeaturesWrapper>
    );
};

export default Features;
