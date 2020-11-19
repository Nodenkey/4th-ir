import React from 'react';
import Contact from "../components/contact/contact.components";
import {Helmet} from "react-helmet";


const ContactPage = ({showFailedModal, showSuccessModal}) => {


    return (
        <>
            <Helmet>
                <title>4th-IR | Contact us</title>
                <meta name="description"
                      content="Building the virtual workforce of the future."/>
            </Helmet>
            <Contact showFailedModal={showFailedModal} showSuccessModal={showSuccessModal}/>
        </>
    );
};

export default ContactPage;
