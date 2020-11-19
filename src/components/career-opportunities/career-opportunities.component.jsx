import React from 'react';
import {GenericLandingSubtitle, PageHeader} from "../toolbelt/toolbelt.style";
import {darkBlue} from "../../utils";

const CareerOpportunities = () => {
    return (
        <div style={{margin: '100px 0', padding: '0 5vw'}}>
            <PageHeader>
                Career Opportunities
            </PageHeader>
            <GenericLandingSubtitle style={{maxWidth: 1000, color: `${darkBlue[400]}`}}>
                We are always on the lookout for talented and experienced individuals curious and passionate about the
                potential of AI and innovation. If you are interested in working with us, please introduce yourself!
                <a href="mailto:info@4th-ir.com" rel='noreferrer noopener' style={{color: '#1BB9D2'}}> info@4th-ir.com</a>
            </GenericLandingSubtitle>

        </div>
    );
};

export default CareerOpportunities;
