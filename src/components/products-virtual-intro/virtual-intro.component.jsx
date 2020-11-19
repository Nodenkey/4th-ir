import React from 'react';
import {Container, PageHeader, TwentyEightText} from "../toolbelt/toolbelt.style";
import {grey} from "../../utils";

const VirtualIntro = () => {
    return (
        <Container style={{marginTop: 100, padding: '0 5vw'}}>
            <TwentyEightText color={grey[400]}>Our Virtual Team members are AI-driven products that can easily integrate
                with your processes and strategy or we can work together to create products tailored to fit your
                business.</TwentyEightText>
            <PageHeader style={{marginTop: 50}}>The Virtual Team</PageHeader>
        </Container>
    );
};

export default VirtualIntro;
