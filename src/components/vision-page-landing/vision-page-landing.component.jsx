import React from 'react';
import {GenericLanding, GenericLandingSubtitle, GenericLandingTitle} from "../toolbelt/toolbelt.style";
import VisionImage from "../../assets/images/vision.png";

const VisionPageLanding = () => {
    return (
        <GenericLanding img={VisionImage}>
            <GenericLandingTitle>Our Vision</GenericLandingTitle>
            <GenericLandingSubtitle>Humans and machines are joining forces leading to a safer, more sustainable and
                productive world. AI can be seen as a collaborative tool between humans and machines, creating the
                virtual workforce of the future.</GenericLandingSubtitle>
        </GenericLanding>
    );
};

export default VisionPageLanding;
