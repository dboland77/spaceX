import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/countdown">Countdown</Link>
                    </li>
                    <li>
                        <Link to="/launch">Upcoming Launches</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
