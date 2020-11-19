import React, {useState} from 'react';
import {
    ErrorParagraph,
    Form, FormButton, FormInput,
    FormLabel,
    FormWrapper,
    NamesContainer, TextArea
} from "../components/contact/contact.style";
import {errorObject, validateContact, validateEMail, validateName} from "../utils/validation";
import {CounterRegisterWrapper} from "../components/counter-challenge-components/counterRegisterStyles";

const CounterRegister = () => {

    const [errorMessage, setErrorMessage] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        nationalityError: '',
        countryError: '',
        cityError: '',
        addressError: '',
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
        e.target.reset();
    }

    return (
        <CounterRegisterWrapper>
            <h1>4th-IR People Counter Virtual Challenge</h1>
            <h2>Serbia</h2>
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <NamesContainer>
                        <FormLabel>
                            First Name*
                            <FormInput type='text' placeholder='First Name' name='firstName'
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
                        Nationality*
                        <FormInput type='text' name='nationality'
                                   onChange={validateNames}
                                   onBlur={validateNames}
                        />
                        <ErrorParagraph>{errorMessage.nationalityError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        Country of Residence*
                        <FormInput type='text' name='country'
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        <ErrorParagraph>{errorMessage.countryError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        City of Residence*
                        <FormInput type='text' name='city'
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        <ErrorParagraph>{errorMessage.cityError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        Residential Address*
                        <FormInput type='text' name='address'
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        <ErrorParagraph>{errorMessage.addressError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        University name
                        <FormInput type='text' name='university'
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        <ErrorParagraph/>
                    </FormLabel>
                    <FormLabel>
                        Company name
                        <FormInput type='text' name='company'
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        <ErrorParagraph/>
                    </FormLabel>
                    <FormLabel>How did you hear about this program?</FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="online"
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        Online
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="recommendation"
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        Recommendation from a Friend
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="social"
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        Social Media (LinkedIn, Facebook)
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="other"
                                   onChange={validatePhone}
                                   onBlur={validatePhone}
                        />
                        Other
                    </FormLabel>
                    <ErrorParagraph>{errorMessage.phoneError}</ErrorParagraph>
                    <FormLabel>
                        Message
                        <TextArea rows='10' name='message'/>
                    </FormLabel>
                    <FormButton>Register</FormButton>
                </Form>
            </FormWrapper>
        </CounterRegisterWrapper>
    );
};

export default CounterRegister;