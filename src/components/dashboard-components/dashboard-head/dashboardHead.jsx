import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFileCsv,
    faUserAlt,
    faEnvelopeOpen,
    faLongArrowAltLeft,
    faGlobeEurope,
    faDoorOpen,
    faCity,
    faBullhorn,
} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {csvConverter} from "../../../utils/csvConverter";
import {download} from "../../../utils/downloader";
import {signOut} from "../../../redux/actions/authActions";
import {
    DashboardButton,
    DashboardElement,
    DashboardHeadGrid,
    DashboardHeadWrapper,
    DashboardTitle
} from "./dashboardHeadStyles";


const DashboardHead = ({details, logout, auth}) => {

    const makeExcel = (details) => {
        const csvData = csvConverter(details, ['firstName', 'lastName', 'email', 'nationality', 'country', 'address', 'city', 'university', 'colab', 'channel', 'company', 'message']);
        download(csvData);
    }

    if (!auth.uid) return <Redirect to="/admin"/>

    const x = window.matchMedia("(max-width: 600px)")

    return (
        <>
            <DashboardHeadWrapper>
                <Link to="/">
                    <DashboardElement>
                        <div>
                            <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                        </div>
                        <p>Go home</p>
                    </DashboardElement>
                </Link>
                <div onClick={logout}>
                    <DashboardElement>
                        <div>
                            <FontAwesomeIcon icon={faDoorOpen}/>
                        </div>
                        <p>Log out</p>
                    </DashboardElement>
                </div>
                <DashboardButton onClick={() => makeExcel(details)}>
                    <FontAwesomeIcon icon={faFileCsv}/>
                    Download as csv
                </DashboardButton>
            </DashboardHeadWrapper>
            <DashboardHeadWrapper>
                <p>4th-IR People Counter Virtual Challenge</p>
            </DashboardHeadWrapper>
            <DashboardTitle>Registered Participants</DashboardTitle>
            {
                x.matches ?
                    <DashboardHeadGrid className="dash-header">
                        <div>
                            <FontAwesomeIcon icon={faUserAlt}/>
                            <p>Name</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <p>Email</p>
                        </div>
                    </DashboardHeadGrid> :
                    <DashboardHeadGrid className="dash-header">
                        <div>
                            <FontAwesomeIcon icon={faUserAlt}/>
                            <p>Name</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <p>Email</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGlobeEurope}/>
                            <p>Country</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCity}/>
                            <p>City</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBullhorn}/>
                            <p>Channel</p>
                        </div>
                    </DashboardHeadGrid>
            }
        </>
    );
};

const mapStateToProps = state => {
    return {
        details: state.firestore.ordered.details,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(signOut())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'details'
    }])
)(DashboardHead);

