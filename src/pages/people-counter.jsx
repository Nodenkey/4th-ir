import React from 'react';
import PeopleCounterBanner from "../components/counter-challenge-components/people-counter-banner/peopleCounterBanner";
import CounterChallengeDetails
    from "../components/counter-challenge-components/counter-challenge-details/counterChallengeDetails";
import CounterTimeline from "../components/counter-challenge-components/counter-timeline/counterTimeline";
import CounterChallengeMore
    from "../components/counter-challenge-components/counter-challenge-more/counterChallengeMore";

const PeopleCounter = () => {
    return (
        <>
            <PeopleCounterBanner/>
            <CounterChallengeDetails/>
            <CounterTimeline/>
            <CounterChallengeMore/>
        </>
    );
};

export default PeopleCounter;