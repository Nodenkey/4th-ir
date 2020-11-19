import React from 'react';
import {ApproachGrid, ApproachVirtualWrapper, Cube, GridContainer, GridParagraph, GridTitle} from "./approach.style";
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {darkBlue} from "../../utils";
import CubeImage from "../../assets/images/cube.png";

const ApproachVirtual = () => {
    return (
        <ApproachVirtualWrapper>
            <PageHeader>Our Approach</PageHeader>
            <PageSubHeaderAlt>Our Virtual Team members are AI-driven products that can easily integrate with your
                processes
                and strategy or we can work together to create products tailored to fit your
                business.</PageSubHeaderAlt>
            <ApproachGrid>
                <GridContainer>
                    <GridTitle>Uncover the full potential of AI</GridTitle>
                    <GridParagraph>Our team evaluates your current state of capabilities and goals, proposing
                        innovations and methodologies.</GridParagraph>
                </GridContainer>
                <GridContainer style={{color: `${darkBlue[400]}`}}>
                    <GridTitle>Discover</GridTitle>
                    <GridParagraph>AI-powered solutions are conceptualized for your specific challenges.</GridParagraph>
                </GridContainer>
                <GridContainer style={{color: `${darkBlue[400]}`}}>
                    <GridTitle>Develop</GridTitle>
                    <GridParagraph>Goals, costs, and timeline are taken into account as our team develops the
                        concept.</GridParagraph>
                </GridContainer>
                <GridContainer>
                    <GridTitle>Deploy & Improve</GridTitle>
                    <GridParagraph>We work with your team in order to define needs, verify data, and deploy
                        groundbreaking AI-powered solutions.</GridParagraph>
                </GridContainer>
                <Cube src={CubeImage} alt='cube'/>
            </ApproachGrid>
        </ApproachVirtualWrapper>
    );
};

export default ApproachVirtual;
