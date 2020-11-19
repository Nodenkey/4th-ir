import React from 'react';
import {CaseStudyWrapper} from "./case-study.style";
import {PageHeader} from "../toolbelt/toolbelt.style";
import Button from "../button/button.component";

const CaseStudy = () => {


    return (
        <CaseStudyWrapper>
            <PageHeader>Our Case Studies</PageHeader>
            <Button link='/case-study' type='secondary'>Learn more</Button>
        </CaseStudyWrapper>
    );
};

export default CaseStudy;
