import React from 'react';
import {Container, PageHeader} from "../toolbelt/toolbelt.style";
import Trestle from "../../assets/images/trestle.png";
import TwoRow from "../partners-two-row/partners-two-row.component";

const StrategicPartners = () => {
    return (
        <Container style={{padding: '50px 5vw'}}>
            <PageHeader>OUR STRATEGIC PARTNERS</PageHeader>
            <TwoRow image={Trestle} imageAlt='Trestle group'
                    paragraphOne='Trestle Group is an international, boutique consulting firm dedicated to empowering innovators to create the future of their industry.'
            />
        </Container>
    );
};

export default StrategicPartners;
