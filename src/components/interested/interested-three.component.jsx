import React from 'react';
import {FooterSectionOne} from "../footer/footer.style";
import Button from "../button/button.component";
import {PageHeader} from "../toolbelt/toolbelt.style";

const InterestedThree = () => {
    return (
        <FooterSectionOne alt='footer background'>
            <PageHeader style={{marginBottom: '100px', color: 'white', fontWeight: '400'}}>We thrive on turning ideas
                into reality by solving complex problems with artificial intelligence</PageHeader>
            <Button link='/virtual-team' type='tertiary'>Discover our virtual team</Button>
        </FooterSectionOne>
    );
};

export default InterestedThree;
