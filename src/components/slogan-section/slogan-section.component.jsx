import React from 'react';
import {PageHeader, PageSubHeader, SloganWrapper} from "../toolbelt/toolbelt.style";
import {pageDetails} from "../../utils/page-docs";
import Button from "../button/button.component";

const SloganSection = ({name}) => {
    let slogan = '';

    pageDetails.forEach(detail => {
        if (detail.name === name) {
            slogan = detail.slogan
        }
    })

    return (
        <SloganWrapper>
            <PageHeader>4th – IR {name}</PageHeader>
            <PageSubHeader style={{fontWeight: '400', marginBottom: '50px'}}>{slogan}</PageSubHeader>
            <Button link='/contact' type='fourth'>Request a Demo</Button>
        </SloganWrapper>
    );
};

export default SloganSection;
