import React from 'react';
import {FooterOneHead, FooterOneText, FooterSectionOne} from "../footer/footer.style";
import Button from "../button/button.component";

const InterestedOne = () => {
    return (
            <FooterSectionOne alt='footer background'>
                <FooterOneHead>Interested to see how AI can transform your business?</FooterOneHead>
                <FooterOneText>We can work with you to develop <span style={{fontWeight: '600'}}>AI-driven products</span> that
                    fit your business and
                    transform your unique strengths.</FooterOneText>
                <Button link='/contact'>Contact us</Button>
            </FooterSectionOne>
    );
};

export default InterestedOne;
