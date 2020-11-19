import React from 'react';
import {Grid, PageHeader, TwentyEightText} from "../../toolbelt/toolbelt.style";
import {CounterTimelineWrapper, TimelineBar, TimelineSection} from "./counterTimelineStyles";

const CounterTimeline = () => {
    return (
        <CounterTimelineWrapper>
            <PageHeader>Timeline:</PageHeader>
            <Grid num="4" top>
                <TimelineSection>
                    <TwentyEightText>Challenge Kick-Off</TwentyEightText>
                    <TwentyEightText>November 30th, 2020</TwentyEightText>
                </TimelineSection>
                <TimelineSection>
                    <TwentyEightText>Pitch Competition and Challenge Review</TwentyEightText>
                    <TwentyEightText>January 18th, 2021</TwentyEightText>
                </TimelineSection>
                <TimelineSection>
                    <TwentyEightText>Product and Team Assessment & Scoring</TwentyEightText>
                    <TwentyEightText>January 25th, 2021</TwentyEightText>
                </TimelineSection>
                <TimelineSection>
                    <TwentyEightText>Award Announcement</TwentyEightText>
                    <TwentyEightText>January 30th, 2021</TwentyEightText>
                </TimelineSection>
            </Grid>
            <TimelineBar/>
            <h3>
                Bootcamps and Q&A Sessions Critical Design Review
            </h3>
        </CounterTimelineWrapper>
    );
};

export default CounterTimeline;