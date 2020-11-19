import React from 'react';
import {ChallengeBanner, ChallengeCardWrapper, ChallengeText} from "./challengeCardStyles";
import {GenericLandingSubtitle} from "../toolbelt/toolbelt.style";
import {Paragraph} from "../contact/contact.style";
import Button from "../button/button.component";

const ChallengeCard = ({image, duration, link, summary, title, alt}) => {
    return (
        <ChallengeCardWrapper>
            <ChallengeBanner image={require(`../../assets/images/${image}`)}>
                <GenericLandingSubtitle>
                    {title}
                </GenericLandingSubtitle>
            </ChallengeBanner>
            <ChallengeText>
                <Paragraph>
                    {summary}
                </Paragraph>
                <Paragraph>{duration}</Paragraph>
                <Button type="primary" link={link}>View Challenge</Button>
            </ChallengeText>
        </ChallengeCardWrapper>
    );
};

export default ChallengeCard;
