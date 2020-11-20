import React from 'react';
import DashboardHead from "../components/dashboard-components/dashboard-head/dashboardHead";
import DashboardList from "../components/dashboard-components/dashboard-list/dashboardList";
import {darkBlue} from "../utils";

const AdminDashboard = () => {
    return (
        <div style={{backgroundColor: darkBlue[400], minHeight: '100vh'}}>
            <DashboardHead/>
            <DashboardList/>
        </div>
    );
};

export default AdminDashboard;