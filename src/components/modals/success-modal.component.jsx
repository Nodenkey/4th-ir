import React from 'react';
import {ModalContainer, ModalWrapper} from "./modal.style";
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {CloseSvg} from "../svg/svg.component";

const SuccessModal = ({close}) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <PageHeader>Message sent successfully</PageHeader>
                <PageSubHeaderAlt>We will get back to you as soon as possible</PageSubHeaderAlt>
                <button onClick={close}><CloseSvg/></button>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default SuccessModal;
