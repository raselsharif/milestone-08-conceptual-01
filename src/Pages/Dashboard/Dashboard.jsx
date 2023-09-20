import React from 'react';
import DashboardSideMenu from './DashboardSideMenu';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <section className='container mx-auto grid grid-cols-12 gap-4 mt-4'>
            <div className='col-span-4'>
                <DashboardSideMenu></DashboardSideMenu>
            </div>
            <div className='col-span-8'>
                changeable page
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Dashboard;