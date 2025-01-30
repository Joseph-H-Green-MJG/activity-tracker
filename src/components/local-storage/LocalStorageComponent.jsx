import { useState, useEffect } from 'react';


function LocalStorageComponent () {
    const [time, setTime] = useState(() => {
        const saved = localStorage.getItem('myTime');
        return saved ? JSON.parse(saved) : '';
    });

    const [elapsed, setElapsed] = useState('');

    useEffect(() => {
        localStorage.setItem('myTime', JSON.stringify(time));
        const interval = setInterval(() => {
            setElapsed(Date.now() - Date.parse(time));
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const clearData = () => {
        setTime('');
        localStorage.removeItem('myTime');
        setElapsed('');
    }

    const setTimeStamp = () => {
        if (!time) {
        setTime(new Date().toString());
        }
    }


    return (
        <div>
            <p>{time ? new Date(time).toLocaleTimeString() : 'No timer set' }</p>
            <p>{time ? `Elapsed Time: ${elapsed} ms` : '' }</p>
            <button id="start" onClick={setTimeStamp}>Start Timer</button>
            <button id="reset" onClick={clearData}>Clear Data</button>
        
        </div>
    );

}

export default LocalStorageComponent;