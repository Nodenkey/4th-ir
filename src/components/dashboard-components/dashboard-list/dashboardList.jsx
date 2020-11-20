import React from 'react';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from 'react-redux';
import DashboardItem from "../dashboard-item/dashboardItem";
import {v4} from "uuid";
import {DashboardListWrapper} from "./dashboardListStyles";


const DashboardList = ({details}) => {
    return (
        <DashboardListWrapper>
            {
                details ?
                    details.slice().sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).map((user, index) =>
                        <DashboardItem key={v4()} name={user.firstName + ' ' + user.lastName} email={user.email}
                                       country={user.country} city={user.city} channel={user.channel} num={index + 1}
                                       address={user.address} company={user.company} message={user.message}
                                       nationality={user.nationality} colab={user.colab} university={user.university}/>
                    ) : <h4 style={{marginLeft: '5vw', color: 'white'}}>Loading...</h4>
            }
        </DashboardListWrapper>
    );
}

const mapStateToProps = (state) => {
    // state refers to the general state of the rootReducer
    return {
        details: state.firestore.ordered.details,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'details'}
    ])
)(DashboardList);
