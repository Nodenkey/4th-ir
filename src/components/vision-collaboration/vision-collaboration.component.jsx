import React from 'react';
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {LogoOne} from "../svg/svg.component";
import {CollaborationWrapper} from "./vision-collaboration.style";

const VisionCollaboration = () => {
    return (
        <CollaborationWrapper>
            <PageHeader>AI <LogoOne/> Everyone</PageHeader>
            <PageSubHeaderAlt>At 4th-IR, we are developing state-of-the-art products that make AI accessible for
                everyone. We are inspired by the power of Artificial Intelligence to augment human abilities in order to
                accomplish more in less time, fostering creativity and innovation. We are building tools with everyone’s
                benefit in mind because AI will have the greatest impact when everyone can access it.</PageSubHeaderAlt>
        </CollaborationWrapper>
    );
};

export default VisionCollaboration;
