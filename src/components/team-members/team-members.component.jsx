import React from 'react';
import {Avatar, TeamMemberWrapper} from "./team-members.styles";
import {DeeperLink, Flex, GenericLandingSubtitle, Grid} from "../toolbelt/toolbelt.style";
import {teamMemberDetails, teamMemberDetails2} from "../../utils/page-docs";

import {darkBlue} from "../../utils";


const TeamMembers = () => {
    return (
        <TeamMemberWrapper>
            <Grid num='3' gap='5vw' style={{alignItems: 'flex-start'}}>
                {
                    teamMemberDetails.map((member, index) =>
                        <Flex vertical key={index}>
                            <Avatar src={require(`../../assets/images/${member.image}`)} alt={member.role}/>
                            {
                                member.linkedIn ? <DeeperLink href={member.linkedIn} rel="noopener" target='_blank'><GenericLandingSubtitle style={{fontWeight: 500, color: `${darkBlue[400]}`}}>{member.name}</GenericLandingSubtitle></DeeperLink> :
                                    <GenericLandingSubtitle style={{fontWeight: 500, color: `${darkBlue[400]}`}}>{member.name}</GenericLandingSubtitle>
                            }
                            <GenericLandingSubtitle style={{marginTop: 5}}>{member.role}</GenericLandingSubtitle>
                        </Flex>
                    )
                }
            </Grid>
            <Grid num='2' gap='5vw' style={{alignItems: 'flex-start', marginTop: '5vw'}}>
                {
                    teamMemberDetails2.map((member, index) =>
                        <Flex vertical key={index}>
                            <Avatar src={require(`../../assets/images/${member.image}`)} alt={member.role}/>
                            {
                                member.linkedIn ? <DeeperLink href={member.linkedIn} rel="noopener" target='_blank'><GenericLandingSubtitle style={{fontWeight: 500, color: `${darkBlue[400]}`}}>{member.name}</GenericLandingSubtitle></DeeperLink> :
                                    <GenericLandingSubtitle style={{fontWeight: 500, color: `${darkBlue[400]}`}}>{member.name}</GenericLandingSubtitle>
                            }
                            <GenericLandingSubtitle style={{marginTop: 5}}>{member.role}</GenericLandingSubtitle>
                        </Flex>
                    )
                }
            </Grid>
        </TeamMemberWrapper>
    );
};

export default TeamMembers;
