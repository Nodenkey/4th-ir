import React, {useState} from 'react';
import {
    ErrorParagraph,
    Form, FormButton, FormInput,
    FormLabel,
    FormWrapper,
    NamesContainer, TextArea
} from "../components/contact/contact.style";
import {errorObject, validateEMail, validateName, validateRegistration} from "../utils/validation";
import {CounterRegisterWrapper} from "../components/counter-challenge-components/counterRegisterStyles";

const CounterRegister = () => {

    const [registerDetails, setRegisterDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        nationality: '',
        country: '',
        city: '',
        address: '',
        university: '',
        company: '',
        channel: '',
        message: '',

    })

    const [errorMessage, setErrorMessage] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        nationalityError: '',
        countryError: '',
        cityError: '',
        addressError: '',
        channelError: '',
    })

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessage({...errorMessage, [error]: message});
    };

    const handleChange = e => {
        setRegisterDetails({...registerDetails, [e.target.name] : e.target.value});
    }


    const validateNames = event => {
        const error = event.target.name + 'Error';
        validateName(event.target, error);
        handleChange(event);
        setError();
    };

    const validateMail = e => {
        const error = e.target.name + 'Error';
        validateEMail(e.target, error);
        handleChange(e);
        setError();
    };

    const makeChannelValid = e => {
        setErrorMessage({...errorMessage, channelError: ''});
        setRegisterDetails({...registerDetails, channel: e.target.value});
    };


    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validateRegistration(e);
        setError();
        if (isValid) {
            console.log('success!');
            console.log(registerDetails);
            e.target.reset();
        }
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
                                   onChange={validateNames}
                                   onBlur={validateNames}
                        />
                        <ErrorParagraph>{errorMessage.countryError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        City of Residence*
                        <FormInput type='text' name='city'
                                   onChange={validateNames}
                                   onBlur={validateNames}
                        />
                        <ErrorParagraph>{errorMessage.cityError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        Residential Address*
                        <FormInput type='text' name='address'
                                   onChange={validateNames}
                                   onBlur={validateNames}
                        />
                        <ErrorParagraph>{errorMessage.addressError}</ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        University name
                        <FormInput type='text' name='university' onChange={handleChange}

                        />
                        <ErrorParagraph/>
                    </FormLabel>
                    <FormLabel>
                        Company name
                        <FormInput type='text' name='company' onChange={handleChange}
                        />
                        <ErrorParagraph/>
                    </FormLabel>
                    <FormLabel>How did you hear about this program?</FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="online"
                                   onClick={makeChannelValid}
                        />
                        Online
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="recommendation"
                                   onClick={makeChannelValid}
                        />
                        Recommendation from a Friend
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="social"
                                   onClick={makeChannelValid}
                        />
                        Social Media (LinkedIn, Facebook)
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="other"
                                   onClick={makeChannelValid}
                        />
                        Other
                    </FormLabel>
                    <ErrorParagraph>{errorMessage.channelError}</ErrorParagraph>
                    <FormLabel>
                        Message
                        <TextArea rows='10' name='message' onChange={handleChange}/>
                    </FormLabel>
                    <FormButton>Register</FormButton>
                </Form>
            </FormWrapper>
        </CounterRegisterWrapper>
    );
};

export default CounterRegister;