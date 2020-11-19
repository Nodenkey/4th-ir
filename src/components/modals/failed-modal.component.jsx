import React from 'react';
import {ModalContainer, ModalWrapper} from "./modal.style";
import {PageHeader, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {CloseSvg} from "../svg/svg.component";

const FailedModal = ({close}) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <PageHeader style={{color: 'red'}}>Oops something seems to have gone wrong</PageHeader>
                <PageSubHeaderAlt>Please try again</PageSubHeaderAlt>
                <button onClick={close}><CloseSvg/></button>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default FailedModal;
