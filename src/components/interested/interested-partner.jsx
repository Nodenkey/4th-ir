import React from 'react';
import {FooterOneHead, FooterSectionOne} from "../footer/footer.style";
import Button from "../button/button.component";

const InterestedPartner = () => {
    return (
        <FooterSectionOne alt='footer background'>
            <FooterOneHead style={{marginBottom: '100px'}}>Interested in partnering with 4th-IR?</FooterOneHead>
            <Button link='/contact'>Contact us</Button>
        </FooterSectionOne>
    );
};

export default InterestedPartner;
