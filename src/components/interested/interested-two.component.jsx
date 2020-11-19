import React from 'react';
import {FooterOneHead, FooterSectionOne} from "../footer/footer.style";
import Button from "../button/button.component";

const InterestedTwo = () => {
    return (
        <FooterSectionOne alt='footer background'>
            <FooterOneHead style={{marginBottom: '100px'}}>Interested in uncovering the full potential of AI?</FooterOneHead>
            <Button link='/contact'>Contact us</Button>
        </FooterSectionOne>
    );
};

export default InterestedTwo;
