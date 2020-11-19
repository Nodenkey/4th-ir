import React, {useState} from 'react';
import {
    ContactHeader,
    ContactWrapper,
    FormInput,
    FormLabel,
    Form,
    FormWrapper,
    TextArea,
    FormAside, Paragraph, FormButton, ErrorParagraph, NamesContainer, SocialImages
} from "./contact.style";
import {Grid, PageSubHeaderAlt} from "../toolbelt/toolbelt.style";
import {validateName, errorObject, validateEMail, validateContact} from "../../utils/validation";
import {LinkedInLink} from "../footer/footer.style";
import {LinkedInSvg, TwitterSvg} from "../svg/svg.component";



const Contact = ({showFailedModal, showSuccessModal}) => {
    const [errorMessage, setErrorMessage] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        companyError: '',
        phoneError: '',
    })

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessage({...errorMessage, [error]: message});
    };

    const validateNames = event => {
        const error = event.target.name + 'Error';
        validateName(event.target, error);
        setError();
    };

    const validateMail = e => {
        const error = e.target.name + 'Error';
        validateEMail(e.target, error);
        setError();
    };

    const validatePhone = e => {
        const error = e.target.name + 'Error';
        validateContact(e.target, error);
        setError();
    }



    const handleSubmit = e => {
        e.preventDefault();
        // const isValid = validateForm(e);
        setError();
    }

    return (
        <ContactWrapper>
            <ContactHeader>Reach out to us</ContactHeader>
            <FormWrapper>
                <Grid columns='1fr .5fr' gap='50px'>
                    <Form onSubmit={handleSubmit}>
                        <NamesContainer>
                            <FormLabel>
                                First Name*
                                <FormInput type='text' placeholder='First Name'  name='firstName'
                                           onChange={validateNames}
                                           onBlur={validateNames}
                                />
                                <ErrorParagraph>{errorMessage.firstNameError}</ErrorParagraph>
                            </FormLabel>
                            <FormLabel>
                                Last Name*
                                <FormInput type='text' placeholder='Last Name' name='lastName'
                                           onChange={validateNames}
                                           onBlur={validateNames}
                                />
                                <ErrorParagraph>{errorMessage.lastNameError}</ErrorParagraph>
                            </FormLabel>
                        </NamesContainer>
                        <FormLabel>
                            Email*
                            <FormInput type='email' name='email'
                                       onChange={validateMail}
                                       onBlur={validateMail}
                            />
                            <ErrorParagraph>{errorMessage.emailError}</ErrorParagraph>
                        </FormLabel>
                        <FormLabel>
                            Company name*
                            <FormInput type='text' name='company'
                                       onChange={validateNames}
                                       onBlur={validateNames}
                            />
                            <ErrorParagraph>{errorMessage.companyError}</ErrorParagraph>
                        </FormLabel>
                        <FormLabel>
                            Phone number*
                            <FormInput type='tel' name='phone'
                                       onChange={validatePhone}
                                       onBlur={validatePhone}
                            />
                            <ErrorParagraph>{errorMessage.phoneError}</ErrorParagraph>
                        </FormLabel>
                        <FormLabel>
                            Message
                            <TextArea rows='10' name='message'/>
                        </FormLabel>
                        <FormButton>Send Message</FormButton>
                    </Form>
                    <FormAside>
                        <PageSubHeaderAlt style={{marginTop: 0}}>Locations</PageSubHeaderAlt>
                        <Paragraph>Luzern, Switzerland</Paragraph>
                        <Paragraph>New York, USA</Paragraph>
                        <Paragraph>Vancouver, Canada</Paragraph>
                        <PageSubHeaderAlt>Contact information</PageSubHeaderAlt>
                        <Paragraph>USA +1 (630) 345-0912</Paragraph>
                        <Paragraph>EU +49 172-8295-895</Paragraph>
                        <Paragraph>Email: info @4th-ir.com</Paragraph>
                        <SocialImages>
                            <LinkedInLink href="https://www.linkedin.com/company/4th-ir/" rel='noopener' target='_blank' alt='4th-IR linkedIn'><LinkedInSvg
                            /></LinkedInLink>
                            <LinkedInLink href="https://twitter.com/ir_4th" rel='noopener'
                                          style={{marginLeft: '20px'}} alt='4th-IR twitter' target='_blank'><TwitterSvg/></LinkedInLink>
                        </SocialImages>
                    </FormAside>
                </Grid>
            </FormWrapper>
        </ContactWrapper>
    );
};

export default Contact;
