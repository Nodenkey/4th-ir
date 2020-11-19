import React, {useEffect, useState} from 'react';
import {ChallengeGrid, Seperator} from "./challenges-tackled.style";
import {Bolden, Flex, GenericLandingSubtitle, Grid, PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {AIFeatureContainer} from "../vision-disruptive/vision-disruptive.style";
import {pageDetails} from "../../utils/page-docs";

const ChallengesTackled = ({name, grid}) => {
    const [details, setDetails] = useState({
        page_name: '',
        problems: [],
    })
    useEffect(() => {
        pageDetails.forEach(page => {
            if (page.name === name) {
                setDetails({...details, page_name: page.name, problems: page.problems})
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ChallengeGrid>
            <PageHeader style={{fontWeight: 500}}>
               <Bolden>Challenges</Bolden> tackled by the <Bolden>{details.page_name}</Bolden>
            </PageHeader>
            <Seperator/>
            <Grid num={grid} gap='30px 50px'>
                {
                    details.problems.map(problem =>
                        <AIFeatureContainer style={{height: '100%', maxWidth: 'initial', width: '100%'}} key={problem.id}>
                            <Flex vertical  style={{alignItems: 'flex-start', justifyContent: 'center', height: '100%'}}>
                                <GenericLandingSubtitle style={{
                                    fontWeight: '500',
                                    margin: '0 0 20px'
                                }}>{problem.title}</GenericLandingSubtitle>
                                <PageSubHeaderAlt style={{margin: 0}}>{problem.explain}</PageSubHeaderAlt>
                            </Flex>
                        </AIFeatureContainer>
                    )
                }
            </Grid>
        </ChallengeGrid>
    );
};

export default ChallengesTackled;
