import { useState, useEffect } from 'react';


function TimerComponent () {
    const [time, setTime] = useState(() => {
        const saved = localStorage.getItem('myTime');
        return saved ? JSON.parse(saved) : '';
    });

    const [elapsed, setElapsed] = useState('00:00:00');

    useEffect(() => {
        localStorage.setItem('myTime', JSON.stringify(time));
        
        const interval = setInterval(() => {
            let ms = Date.now() - Date.parse(time);
            let seconds = Math.floor(ms / 1000);
            let minutes = Math.floor((seconds / 60) % 60);
            let hours = Math.floor((minutes / 3600) % 24);

            seconds = seconds % 60;
            minutes = minutes % 60;
            hours = hours % 24;

            hours = (hours < 10 ) ? '0' + hours : hours;
            minutes = (minutes < 10 ) ? '0' + minutes : minutes;
            seconds = (seconds < 10 ) ? '0' + seconds : seconds;
            
            setElapsed(hours + ":" + minutes + ":" + seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const clearData = () => {
        setTime('');
        localStorage.removeItem('myTime');
        setElapsed('00:00:00');
    }

    const setTimeStamp = () => {
        if (!time) {
        setTime(new Date().toString());
        }
    }


    return (
        <div>
            <p>{time ? 'Time started: ' +  new Date(time).toLocaleTimeString() : 'Time started: No timer set' }</p>
            <p>{time ? `Elapsed Time: ${elapsed}` : 'Elapsed Time: 00:00:00' }</p>
            <button id="start" onClick={setTimeStamp}>Start Timer</button>
            <button id="reset" onClick={clearData}>Clear Data</button>
        
        </div>
    );

}

export default TimerComponent;