import React from 'react';
import {CounterChallengeDetailsWrapper} from "./counterChallengeDetailsStyles";
import {Flex, Grid, PageHeader, PageSubHeaderAlt} from "../../toolbelt/toolbelt.style";
import Group from "../../../assets/images/group.svg";

const CounterChallengeDetails = () => {
    return (
        <CounterChallengeDetailsWrapper>
            <div>
                <PageHeader>The Challenge</PageHeader>
                <PageSubHeaderAlt>This is a call to idea innovators in Serbia to compete by creating a prototype that
                    counts
                    people entering and exiting a commercial establishment via a network of cameras stationed throughout
                    the
                    environment.
                </PageSubHeaderAlt>
            </div>
            <div>
                <PageHeader>Are you ready?</PageHeader>
                <PageSubHeaderAlt>
                    Join the 4th-IR Virtual Challenge and have your ideas showcased in front of the best
                    in class tech audience!
                </PageSubHeaderAlt>
            </div>
            <div>
                <PageHeader>The 4th-IR Virtual Challenge is open to:</PageHeader>
                <Grid num="3" gap="100px" top phoneGap="30px">
                    <PageSubHeaderAlt>
                        Highly skilled technical individuals with machine learning interest and capabilities and
                        practical experience developing prototypes
                    </PageSubHeaderAlt>
                    <Flex vertical>
                        <img src={Group} alt="group"/>
                        <PageSubHeaderAlt>
                            Individuals or Teams of 2-5 persons
                        </PageSubHeaderAlt>
                    </Flex>
                    <PageSubHeaderAlt>
                        IT Professionals Programmers Artificial Intelligence Developers
                    </PageSubHeaderAlt>
                </Grid>
            </div>
        </CounterChallengeDetailsWrapper>
    );
};

export default CounterChallengeDetails;