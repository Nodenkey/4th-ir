import React from 'react';
import {AdminModalGrid, AdminModalMain, AdminModalWrapper} from "./modalStyles";

const Modal = ({setShowModal, name, email, channel, city, country, nationality, address, company, message, colab, university}) => {

    const closeModal = (e) => {
        e.target.id === "modal" && setShowModal(false);
    }

    return (
        <AdminModalWrapper id="modal" onClick={closeModal}>
            <AdminModalMain>
                <AdminModalGrid className="modal-grid">
                    <p>Name</p>
                    <p>{name}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Email</p>
                    <p>{email}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Nationality</p>
                    <p>{nationality}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Country</p>
                    <p>{country}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>City</p>
                    <p>{city}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Address</p>
                    <p>{address}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>University</p>
                    <p>{university}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Company</p>
                    <p>{company}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Channel</p>
                    <p>{channel}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Team/Ind.</p>
                    <p>{colab}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Message</p>
                    <p>{message}</p>
                </AdminModalGrid>
            </AdminModalMain>
        </AdminModalWrapper>
    );
}

export default Modal;
