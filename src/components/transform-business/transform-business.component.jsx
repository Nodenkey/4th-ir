import React from 'react';
import {RotateCube, TransformBusinessWrapper, TransformServicesGrid} from "./transform-business.style";
import {PageHeader, PageSubHeaderAlt, ShadowBox} from "../toolbelt/toolbelt.style";
import Cube from "../../assets/images/cube.svg";

const TransformBusiness = () => {
    return (
        <TransformBusinessWrapper>
            <PageHeader>Transform your business with a custom-built Virtual Team</PageHeader>
            <PageSubHeaderAlt>Building your own Virtual Team will help you automate important business processes and
                streamline your operations towards digital transformation.</PageSubHeaderAlt>
            <TransformServicesGrid>
                <div>
                    <ShadowBox>
                        <PageHeader>Rapidly implement AI-driven products to automate business processes.</PageHeader>
                    </ShadowBox>
                    <RotateCube src={Cube} alt='cube'/>
                </div>
                <div>
                    <ShadowBox>
                        <PageHeader>Build your own Virtual Team for an individual process or full scale digital
                            transformation.</PageHeader>
                    </ShadowBox>
                    <RotateCube src={Cube} alt='cube'/>
                </div>
                <div>
                    <ShadowBox>
                        <PageHeader>Make the most of knowledge and skills in your organization.</PageHeader>
                    </ShadowBox>
                    <RotateCube src={Cube} alt='cube'/>
                </div>
                <div>
                    <ShadowBox>
                        <PageHeader>Take advantage of new opportunities and disrupt your industry.</PageHeader>
                    </ShadowBox>
                    <RotateCube src={Cube} alt='cube'/>
                </div>
            </TransformServicesGrid>
        </TransformBusinessWrapper>
    );
};

export default TransformBusiness;
