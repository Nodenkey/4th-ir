import React from 'react';
import ChallengesBanner from "../components/challenges-banner/ChallengesBanner";
import ChallengesList from "../components/challenges-list/challengesList";


const Challenges = () => {
    return (
        <>
            <ChallengesBanner/>
            <ChallengesList/>
        </>
    );
};

export default Challenges;
