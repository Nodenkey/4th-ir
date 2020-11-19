import React from 'react';
import {GenericLanding, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import VirtualImage from "../../assets/images/footer.png";

const VirtualTeamLanding = () => {
    return (
        <GenericLanding img={VirtualImage}>
            <GenericLandingTitle>Building the Virtual Workforce of the Future</GenericLandingTitle>
            <GenericLandingSubtitle>Artificial Intelligence has transformed the workplace as we know it. During these
                unprecedented times, there is more urgency for companies to automate and innovate in order to reap the
                benefits of a virtual workforce.</GenericLandingSubtitle>
        </GenericLanding>
    );
};

export default VirtualTeamLanding;
