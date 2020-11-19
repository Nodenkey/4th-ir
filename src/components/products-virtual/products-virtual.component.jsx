import React from 'react';
import {VisionWorkforceWrapper, WorkforceGrid} from "../vision-workforce/vision-workforce.style";
import {Container, TwentyEightText} from "../toolbelt/toolbelt.style";

const ProductsVirtual = () => {
    return (
        <VisionWorkforceWrapper>
            <TwentyEightText color='#F8F8F8'>We’re unlocking the collaborative intelligence between humans and machines to transform the
                future of work, so every company achieves competitive advantage by leveraging Artificial
                Intelligence.</TwentyEightText>
            <WorkforceGrid>
                <Container style={{fontWeight: 'bold'}}>
                    Virtual Data Steward
                </Container>
                <Container style={{fontWeight: 'bold'}}>
                    Virtual Claims Processor
                </Container>
                <Container style={{fontWeight: 'bold'}}>
                    Virtual Customer Assistant
                </Container>
                <Container style={{fontWeight: 'bold'}}>
                    Virtual System Integrator
                </Container>
                <Container style={{fontWeight: 'bold'}}>
                    Virtual Clinical Imaging Analyst
                </Container>
            </WorkforceGrid>
        </VisionWorkforceWrapper>
    );
};

export default ProductsVirtual;
