import React from 'react';
import {ProductsTransformWrapper} from "./products-transform.style";
import {GenericGrid, PageHeader, TwentyEightText} from "../toolbelt/toolbelt.style";
import {darkBlue, grey} from "../../utils";

const ProductsTransform = () => {
    return (
        <ProductsTransformWrapper>
            <PageHeader>Transform your business with a custom-built Virtual Team</PageHeader>
            <TwentyEightText color={grey[400]}>Building your own Virtual Team will help you automate important business
                processes and
                streamline your operations towards digital transformation.</TwentyEightText>
            <GenericGrid num='2'>
                <TwentyEightText color={darkBlue[400]} style={{fontWeight: 600}}>Rapidly implement AI-driven products to
                    automate business processes.
                </TwentyEightText>
                <TwentyEightText color={darkBlue[400]} style={{fontWeight: 600}}>Build your own
                    Virtual Team for an individual process or full scale digital transformation.</TwentyEightText>
                <TwentyEightText color={darkBlue[400]} style={{fontWeight: 600}}>Make the most of knowledge and skills
                    in your organization.</TwentyEightText>
                <TwentyEightText color={darkBlue[400]} style={{fontWeight: 600}}>Take advantage of new opportunities and
                    disrupt your industry.</TwentyEightText>
            </GenericGrid>

        </ProductsTransformWrapper>
    );
};

export default ProductsTransform;
