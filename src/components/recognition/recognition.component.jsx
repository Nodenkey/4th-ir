import React from 'react';
import {PageHeader} from "../toolbelt/toolbelt.style";
import TwoRow from "../partners-two-row/partners-two-row.component";
import Awards from "../../assets/images/awards.png";
import {FlexImageContainer} from "./recognition.style";

const Recognition = () => {
    return (
        <FlexImageContainer style={{padding: '50px 5vw'}}>
            <PageHeader>RECOGNITIONS & ACHIEVEMENTS</PageHeader>
            <TwoRow image={Awards} imageAlt='Trestle group'
                    paragraphOne='“All of us at Lucerne Business are thrilled and committed to working with 4th-IR to facilitate its vision for AI technology excellence in Switzerland and specifically in Lucerne,”'
                    paragraphTwo='Ivan Buck, CEO of the economic development initiative for Canton Lucerne, Switzerland.'
            />
            <TwoRow textReplace = 'Top 3% in the CAMELYON17 Grand Challenge'
                    paragraphOne='CAMELYON17 is the second grand challenge in pathology organized by the Diagnostic Image Analysis Group (DIAG) and Department of Pathology of the Radboud University Medical Center (Radboudumc) in Nijmegen, The Netherlands.'
            />
            <TwoRow textReplace = 'Top 100 in Healthcare 2019 International Forum on Advancements in Healthcare (IFAH)'
                    paragraphOne='IFAH awarded 4th-IR COO Beth Mosier with the ‘Top 100 Healthcare Leaders’ Award 2019. International Forum on Advancements in Healthcare (IFAH) is dedicated to improving healthcare by facilitating an open dialogue between the different industry stakeholders.'
            />
        </FlexImageContainer>
    );
};

export default Recognition;



