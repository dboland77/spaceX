import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Countdown from '../Countdown/Countdown';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';
import NoPage from './NoPage/NoPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/countdown" element={<Countdown />} />
                    <Route path="/launch" element={<UpcomingLaunches />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
