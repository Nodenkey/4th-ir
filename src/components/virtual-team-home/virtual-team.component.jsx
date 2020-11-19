import React from 'react';
import {CardAction, CardTitle, TeamCard, TeamRowOne, TeamRowTwo, VirtualTeamWrapper} from "./virtual.style";
import {Image, PageHeader, PageSubHeader} from "../toolbelt/toolbelt.style";
import VDS from "../../assets/images/vds.png";
import VCP from "../../assets/images/vcp.png";
import VSI from "../../assets/images/vsi.png";
import VCIA from "../../assets/images/vcia.png";
import VCA from "../../assets/images/vca.png";
import {Link} from "react-router-dom";

const VirtualTeam = () => {
    return (
        <VirtualTeamWrapper>
            <PageHeader>Your Virtual Team</PageHeader>
            <PageSubHeader>Drive growth and boost productivity with AI</PageSubHeader>
            <TeamRowOne>
                <Link to='/vds'><TeamCard>
                    <CardTitle>Virtual data steward</CardTitle>
                    <Image src={VDS} wide='200px' alt='robot'/>
                    <CardAction>Identify</CardAction>
                </TeamCard></Link>
                <Link to='/vcp'><TeamCard>
                    <CardTitle>Virtual claims processor</CardTitle>
                    <Image src={VCP} wide='200px' alt='robot'/>
                    <CardAction>Automate</CardAction>
                </TeamCard></Link>
                <Link to='/vsi'><TeamCard>
                    <CardTitle>Virtual systems integrator</CardTitle>
                    <Image src={VSI} wide='200px' alt='robot'/>
                    <CardAction>Integrate</CardAction>
                </TeamCard></Link>
            </TeamRowOne>
            <TeamRowTwo>
                <Link to='/vcia'><TeamCard>
                    <CardTitle>Virtual Clinical Imaging Analyst</CardTitle>
                    <Image src={VCIA} wide='200px' alt='robot'/>
                    <CardAction>Analyze</CardAction>
                </TeamCard></Link>
                <Link to='/vca'><TeamCard>
                    <CardTitle>Virtual Customer Assistant</CardTitle>
                    <Image src={VCA} wide='200px' alt='robot'/>
                    <CardAction>Engage</CardAction>
                </TeamCard></Link>
            </TeamRowTwo>
        </VirtualTeamWrapper>
    );
};

export default VirtualTeam;
