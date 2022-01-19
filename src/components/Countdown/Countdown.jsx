import React from 'react';
// import unixToLocal from '../../utils/unixtolocal';

// { useEffect, useState } from 'react';

function Countdown({ target }) {
    // const [target, setTarget] = useState({ now: Math.floor(Date.now() / 1000) });
    // const [interval, setInterval] = useState(0);

    if (target === undefined) {
        return;
    }

    //   const tick = () => {
    //     setTarget({ now: Math.floor(Date.now() / 1000) })
    //   }

    // useEffect(() => {
    //     setTarget({ now: Math.floor(Date.now() / 1000) });
    //     setInterval(5);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, [interval]);

    // const todaysDate = new Date().toISOString();
    const test = new Date(target);
    let difference = test - Date.now();
    console.log(difference);

    if (difference <= 0) {
        difference = 0;
    }

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return (
        <>
            <div>
                <div>{String(days).padStart(2, '0')}</div>
                <span>days</span>
            </div>
            <div>
                <div>{String(hours % 24).padStart(2, '0')}</div>
                <span>hours</span>
            </div>
            <div>
                <div>{String(minutes % 60).padStart(2, '0')}</div>
                <span>minutes</span>
            </div>
            <div>
                <div>{String(seconds % 60).padStart(2, '0')}</div>
                <span>seconds</span>
            </div>
        </>
    );
}

export default Countdown;
