import React from 'react';
import {SemiBolden, PageHeader, ShadowBox, TwentyEightText, Image} from "../toolbelt/toolbelt.style";
import {TeamFeaturesWrapper} from "./team-features.style";
import Robot from "../../assets/images/ai.svg";
import Brain from "../../assets/images/brain3.svg";
import Certificate from "../../assets/images/course.svg";

const TeamFeatures = () => {
    return (
        <TeamFeaturesWrapper num='4' gap='20px'>
            <ShadowBox>
                <PageHeader>2016</PageHeader>
                <TwentyEightText>Year founded</TwentyEightText>
            </ShadowBox>
            <ShadowBox>
                <Image src={Robot}/>
                <TwentyEightText><SemiBolden>Proven track record</SemiBolden> in the deployment of AI software</TwentyEightText>
            </ShadowBox>
            <ShadowBox>
                <Image src={Brain}/>
                <TwentyEightText><SemiBolden>Innovative approach</SemiBolden> in driving transformation</TwentyEightText>
            </ShadowBox>
            <ShadowBox>
                <Image src={Certificate}/>
                <TwentyEightText>Certified Experts</TwentyEightText>
            </ShadowBox>
        </TeamFeaturesWrapper>
    );
};

export default TeamFeatures;
