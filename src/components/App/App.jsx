import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout/Layout.tsx';
import Countdown from '../Countdown/Countdown.tsx';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches.tsx';
import NoPage from './NoPage/NoPage.tsx';
import unixToLocal from '../../utils/unixtolocal';

function App() {
    const [launchesNext, setLaunchesNext] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/launches/next');
            setLaunchesNext(response.data.date_local);
        };

        if (!launchesNext) {
            fetchData();
        }
    }, [launchesNext]);

    if (launchesNext !== undefined) {
        // let timeString =
        unixToLocal(launchesNext);
        //  console.log(launchesNext);
    }
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
