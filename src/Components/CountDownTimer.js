import {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './Utils';

import 'aos/dist/aos.css';



const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(

        <div className="main"  >
     

        <div className="countDown" data-aos="fade-up"
      data-aos-duration="1000">
<h2 className="disc_text">We are opening live<br></br> show room soon!</h2>

        <div className="timePads">
            <span className='timeNumbers'>{remainingTime.days}</span>
            <span className='timeTitle'>days</span>
            <span className='timeNumbers' >{remainingTime.hours}</span>
            <span className='timeTitle'>hours</span>
            <span className='timeNumbers'>{remainingTime.minutes}</span>
            <span className='timeTitle'>minutes</span>
            <span className='timeNumbers'>{remainingTime.seconds}</span>
            <span className='timeTitle'>seconds</span>
          </div>  
        </div>
       </div> 
    );
}

export default CountdownTimer;

