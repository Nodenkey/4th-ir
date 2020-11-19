import React from 'react';
import {Band, MissionCardSection, MissionText, VisionMissionWrapper} from "./vision-mission.style";
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import {CardTitle, TeamCard} from "../virtual-team-home/virtual.style";
import {InnovativeImage} from "../innovative-edge/innovative-edge.style";
import Workflow from "../../assets/images/workflow.svg";
import Brain from "../../assets/images/brain2.svg";
import Robot from "../../assets/images/robot.svg";

const VisionMission = () => {
    return (
        <VisionMissionWrapper>
            <PageHeader>Our Mission</PageHeader>
            <Container>
                <Band/>
                <MissionCardSection>
                    <TeamCard>
                        <InnovativeImage src={Workflow} alt='android'/>
                        <CardTitle>Human-Machine Interaction</CardTitle>
                        <MissionText>A symbiotic application of machine intelligence and human intelligence will lead to
                            a
                            safer, more sustainable and more productive world</MissionText>
                    </TeamCard>
                    <TeamCard>
                        <InnovativeImage src={Brain} alt='android'/>
                        <CardTitle>Applied Intelligence</CardTitle>
                        <MissionText>We envision a future where humans perform those tasks they wish to perform and
                            leverage
                            AI to do the rest</MissionText>
                    </TeamCard>
                    <TeamCard>
                        <InnovativeImage src={Robot} alt='android'/>
                        <CardTitle>The Virtual Workforce of the Future</CardTitle>
                        <MissionText>Our goal is to assist in creating and deploying “Automated Intelligent” software,
                            processes and methodologies to create the virtual workforce of our future</MissionText>
                    </TeamCard>
                </MissionCardSection>
            </Container>
        </VisionMissionWrapper>
    );
};

export default VisionMission;
