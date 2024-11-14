import { useState, useEffect } from 'react';


function LocalStorageComponent () {
    const [time, setTime] = useState(() => {
        const saved = localStorage.getItem('myTime');
        return saved ? JSON.parse(saved) : 'Initial Data';
    });

    useEffect(() => {
        localStorage.setItem('myTime', JSON.stringify(time));
        console.log(localStorage.getItem('myTime'))
    }, [time]);

    const clearData = () => {
        setTime('');
        localStorage.removeItem('myTime');
    }

    const setTimeStamp = () => {
        if (!time || time == 'Initial Data') {
        setTime(Date.now().toString());
        }
    }

    return (
        <div>
            <p>{!time || time == '' ? 'Initial Data' :  new Date(time * 1000).toLocaleTimeString() }</p>
            <button onClick={setTimeStamp}>Start Timer</button>
            <button onClick={clearData}>Clear Data</button>
        
        </div>
    );
}

export default LocalStorageComponent;