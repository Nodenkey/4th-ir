import React, {useState} from 'react';
import {AdminWrapper} from "./adminStyles";
import {connect} from 'react-redux';
import {signIn} from "../../redux/actions/authActions";
import {
    ErrorParagraph,
    Form,
    FormButton,
    FormInput,
    FormLabel, FormWrapper, Paragraph,
} from "../contact/contact.style";
import {Redirect} from "react-router-dom";


const AdminComponent = ({signIn, auth}) => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const submitValues = e => {
        const {name, value} = e.target;
        setCredentials({
            ...credentials, [name]: value
        })
    }

    console.log(auth);

    const handleSubmit = e => {
        e.preventDefault();
        signIn(credentials)
    }

    if(auth.uid)  return <Redirect to="/dashboard"/>

    return (
        <AdminWrapper>
            <FormWrapper>
                <Paragraph>Login to gain access to admin dashboard</Paragraph>
                <Form onSubmit={handleSubmit}>
                    <FormLabel>
                        Email*
                        <FormInput type='email' name='email' onChange={submitValues}
                        />
                        <ErrorParagraph></ErrorParagraph>
                    </FormLabel>
                    <FormLabel>
                        Password*
                        <FormInput type='password' name='password' onChange={submitValues}
                                   autoComplete="on"
                        />
                        <ErrorParagraph></ErrorParagraph>
                    </FormLabel>

                    <FormButton>Login</FormButton>
                </Form>
            </FormWrapper>
        </AdminWrapper>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);