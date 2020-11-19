import React from 'react';
import {CounterBannerHeader, CounterBannerText, Hash, PeopleCounterBannerWrapper} from "./peopleCounterBannerStyles";
import {PageHeader, TwentyEightText} from "../../toolbelt/toolbelt.style";
import Button from "../../button/button.component";

const PeopleCounterBanner = () => {
    return (
        <PeopleCounterBannerWrapper>
            <CounterBannerText>
                <CounterBannerHeader>4th-IR People Counter Virtual Challenge</CounterBannerHeader>
                <Hash>#4th-IRInnovationChallenges</Hash>
                <Hash>#ArtificialIntelligence</Hash>
                <Hash>#MachineLearning</Hash>
                <PageHeader style={{color: "#F8F8F8", fontWeight: 500, margin: "10px auto 5px"}}>Serbia</PageHeader>
                <PageHeader style={{color: "#6AD5E6", fontWeight: 500, lineHeight: '120%', margin: "5px auto"}}>Total Prize USD $10,000</PageHeader>
                <TwentyEightText style={{fontWeight: 600, margin: "5px auto 20px"}}>Open Until: January 30th 2021</TwentyEightText>
                <Button link="/counter-register">Register now</Button>
            </CounterBannerText>
        </PeopleCounterBannerWrapper>
    );
};

export default PeopleCounterBanner;