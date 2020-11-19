import React from 'react';
import {InnovativeEdgeWrapper, InnovativeImage} from "./innovative-edge.style";
import {TransformServicesGrid} from "../transform-business/transform-business.style";
import {Flex, PageHeader} from "../toolbelt/toolbelt.style";
import Android from "../../assets/images/android.svg";
import Bulb from "../../assets/images/bulb.svg";
import Control from "../../assets/images/control.svg";
import Robot from "../../assets/images/robot.svg";

const InnovativeEdge = () => {
    return (
        <InnovativeEdgeWrapper>
            <PageHeader>Our Innovative Edge</PageHeader>
            <TransformServicesGrid>
                <Flex vertical>
                    <InnovativeImage src={Android} alt='android' style={{marginBottom: 40}}/>
                    <PageHeader style={{marginBottom: 40}}>Expertise</PageHeader>
                    <PageHeader style={{fontWeight: 'normal'}}>We can provide innovative
                        and comprehensive AI-powered solutions, regardless of your industry or segment.</PageHeader>
                </Flex>
                <Flex vertical>
                    <InnovativeImage src={Bulb} alt='bulb' style={{marginBottom: 40}}/>
                    <PageHeader style={{marginBottom: 40}}>Sustainable Competitive Advantage</PageHeader>
                    <PageHeader style={{fontWeight: 'normal'}}>Our team develops solutions
                        for challenges with future implications in mind - fueling new markets in specific
                        industries.</PageHeader>
                </Flex>
                <Flex vertical>
                    <InnovativeImage src={Control} alt='pointing finger' style={{marginBottom: 40}}/>
                    <PageHeader style={{marginBottom: 40}}>Adaptability</PageHeader>
                    <PageHeader style={{fontWeight: 'normal'}}>We adapt to a rapidly
                        changing market as we adjust and evolve - staying in line with our mission and
                        values.</PageHeader>
                </Flex>
                <Flex vertical>
                    <InnovativeImage src={Robot} alt='artificial intelligence' style={{marginBottom: 40}}/>
                    <PageHeader style={{marginBottom: 40}}>Disruptive Tech</PageHeader>
                    <PageHeader style={{fontWeight: 'normal'}}>We easily integrate
                        disruptive and innovative solutions into any environment as we move forward.</PageHeader>
                </Flex>
            </TransformServicesGrid>
        </InnovativeEdgeWrapper>
    );
};

export default InnovativeEdge;
