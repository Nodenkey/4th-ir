import React from 'react';
import {ChallengeListWrapper} from "./challengesListStyles";
import {challengesDocs} from "../../utils/page-docs";
import ChallengeCard from "../challenge-card/challengeCard";
import {v4} from "uuid";

const ChallengesList = () => {
    return (
        <ChallengeListWrapper num="1" center>
            {
                challengesDocs.map(challenge =>
                    <ChallengeCard key={v4()} title={challenge.title} summary={challenge.summary} duration={challenge.duration} link={challenge.link} image={challenge.image} alt={challenge.alt}/>
                )
            }
        </ChallengeListWrapper>
    );
};

export default ChallengesList;
