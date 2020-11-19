import React from 'react';
import {HomeLandingWrapper, SubText} from "./home-landing.style";
import {Container, MainLandingHeader} from "../toolbelt/toolbelt.style";
import Button from "../button/button.component";

const HomeLanding = () => {
    return (
        <HomeLandingWrapper>
            <Container style={{marginTop: '90px'}}>
                <MainLandingHeader>Building the virtual workforce of the future</MainLandingHeader>
                <SubText>Artificial Intelligence for a smarter tomorrow</SubText>
                <Button type='primary' link='/learn-more'>Learn more</Button>
            </Container>
        </HomeLandingWrapper>
    );
};

export default HomeLanding;
