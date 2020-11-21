import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {removeRegistered} from "../../../redux/actions/registerActions";
import {SuccessPageWrapper} from "./successPageStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {PageHeader, TwentyEightText} from "../../toolbelt/toolbelt.style";

const SuccessPage = ({removeRegistered, registrationSuccess}) => {

    useEffect(() => {
        return () => removeRegistered();
    }, [removeRegistered]);

    if (!registrationSuccess) return <Redirect to="/counter-register"/>
    return (
        <SuccessPageWrapper vertical center>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <PageHeader>Registration Successful</PageHeader>
            <TwentyEightText>Please check your mail</TwentyEightText>
        </SuccessPageWrapper>
    );
};

const mapDispatchToProp = (dispatch) => {
    return {
        removeRegistered: () => dispatch(removeRegistered())
    }
}

const mapStateToProps = state => {
    return {
        registrationSuccess: state.register.registrationSuccess
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(SuccessPage);