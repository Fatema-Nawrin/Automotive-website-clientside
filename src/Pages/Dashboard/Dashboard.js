import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-xl lg:text-3xl font-semibold text-teal-500 px-4 lg:px-2'>Dashboard
                        <label htmlFor="dashboard-drawer" tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </h2>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-2 md:p-4 overflow-y-auto w-40 md:w-60 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add Review</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;