import React from 'react';
import {Grid, PageHeader} from "../toolbelt/toolbelt.style";
import Optherium from '../../assets/images/optherium.svg';
import Lac from '../../assets/images/lac2.svg';
import Trestle from '../../assets/images/trestle-group.png';

import {OtherPartnersWrapper} from "./otherPartnersStyles";

const OtherPartners = () => {
    return (
        <OtherPartnersWrapper>
            <PageHeader>OUR OTHER PARTNERS</PageHeader>
            <Grid num='3' center gap='50px'>
                <a href="https://optherium.com" target="_blank" rel="noreferrer noopener"><img src={Optherium}
                                                                                               alt='Optherium'/></a>
                <img src={Lac} alt='Lac'/>
                <a href="https://trestlegroupfoundation.org" target="_blank" rel="noreferrer noopener"><img
                    src={Trestle} alt='Trestle'/></a>
            </Grid>
        </OtherPartnersWrapper>
    )
        ;
};

export default OtherPartners;
