import React, {useEffect, useRef, useState} from 'react';
import {
    ErrorParagraph,
    Form, FormButton, FormInput,
    FormLabel,
    FormWrapper,
    NamesContainer, TextArea
} from "../components/contact/contact.style";
import {errorObject, validateEMail, validateName, validateRegistration} from "../utils/validation";
import {CounterRegisterWrapper} from "../components/counter-challenge-components/counterRegisterStyles";
import {connect} from 'react-redux';
import {registerUser} from "../redux/actions/registerActions";



const CounterRegister = ({registerUser, registrationError, registrationSuccess, history}) => {
    const formSubmitRef = useRef(null);

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
        colab: '',
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
        colabError: '',
        formSubmitError: '',
    })

    const setError = () => {
        let error = errorObject.error;
        let message = errorObject.message;
        setErrorMessage({...errorMessage, [error]: message});
    };

    const handleChange = e => {
        setRegisterDetails({...registerDetails, [e.target.name]: e.target.value});
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

    const makeColabValid = e => {
        setErrorMessage({...errorMessage, colabError: ''});
        setRegisterDetails({...registerDetails, colab: e.target.value});
    };


    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validateRegistration(e);
        setError();
        if (isValid) {
            registerUser(registerDetails);
        }
    }

    useEffect(() => {
        if (registrationSuccess) {
            setErrorMessage({
                ...errorMessage,
                formSubmitError: ''
            })
            history.push('/success');
        } else if (registrationError) {
            setErrorMessage({
                ...errorMessage,
                formSubmitError: 'Something went wrong with submitting your form. Please try again.'
            })
            formSubmitRef.current.focus();
        }
    }, [registrationSuccess, registrationError, errorMessage, history])


    return (
        <CounterRegisterWrapper>
            <h1>4th-IR People Counter Virtual Challenge</h1>
            <h2>Serbia</h2>
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <ErrorParagraph ref={formSubmitRef}>{errorMessage.formSubmitError}</ErrorParagraph>
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
                        <FormInput type='radio' name='channel' value="Online"
                                   onClick={makeChannelValid}
                        />
                        Online
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="Recommendation"
                                   onClick={makeChannelValid}
                        />
                        Recommendation from a Friend
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="Social"
                                   onClick={makeChannelValid}
                        />
                        Social Media (LinkedIn, Facebook)
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='channel' value="Other"
                                   onClick={makeChannelValid}
                        />
                        Other
                    </FormLabel>
                    <ErrorParagraph>{errorMessage.channelError}</ErrorParagraph>
                    <FormLabel>Are you registering as a team or an individual?</FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='colab' value="Team"
                                   onClick={makeColabValid}
                        />
                        Team
                    </FormLabel>
                    <FormLabel className="radio-label">
                        <FormInput type='radio' name='colab' value="Individual"
                                   onClick={makeColabValid}
                        />
                        Individual
                    </FormLabel>
                    <ErrorParagraph>{errorMessage.colabError}</ErrorParagraph>
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

const mapDispatchToProp = (dispatch) => {
    return {
        registerUser: (details) => dispatch(registerUser(details))
    }
}

const mapStateToProps = state => {
    return {
        registrationError: state.register.registrationError,
        registrationSuccess: state.register.registrationSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(CounterRegister);