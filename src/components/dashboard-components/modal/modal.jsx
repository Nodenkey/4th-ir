import React from 'react';
import {AdminModalGrid, AdminModalMain, AdminModalWrapper} from "./modalStyles";

const Modal = ({setShowModal, name, email, channel, city, country}) => {

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
                    <p>Country</p>
                    <p>{country}</p>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>City</p>
                    <div className="list">
                        {city}
                    </div>
                </AdminModalGrid>
                <AdminModalGrid>
                    <p>Channel</p>
                    <div className="list">
                        {channel}
                    </div>
                </AdminModalGrid>
            </AdminModalMain>
        </AdminModalWrapper>
    );
}

export default Modal;
