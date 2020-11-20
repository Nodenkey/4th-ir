import React from 'react';
import DashboardHead from "../components/dashboard-components/dashboard-head/dashboardHead";
import DashboardList from "../components/dashboard-components/dashboard-list/dashboardList";

const AdminDashboard = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <DashboardHead/>
            <DashboardList/>
        </div>
    );
};

export default AdminDashboard;