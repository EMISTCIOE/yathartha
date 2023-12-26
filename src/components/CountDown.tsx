import { useState, useEffect } from "react";

interface ICounter{
    num : string,
    time : string
};

const CountDown : React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<string[]>([])

    useEffect(()=> {
        let countDownDate = new Date("Jan 25, 2024 12:00:00").getTime();

        let x = setInterval(()=> {
        let now = new Date().getTime();
            
        let distance = countDownDate - now;
            
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft([String(days),String(hours), String(minutes), String(seconds)]);
            
        if (distance < 0) {
            clearInterval(x);
            return -1;
        }
        }, 1000);
    },[])

  return (
    <div className="bg-theme-black-alt animate-border bg-gradient-to-r from-theme via-theme-red to-theme bg-[length:400%_400%] rounded-xl p-[0.25rem] m-6 text-theme-white">
        <div className="bg-theme-black-alt flex md:flex-row flex-col justify-evenly rounded-xl p-6">
            <Digit num={timeLeft[0]} time={"days"} />
            <Digit num={timeLeft[1]} time={"hours"} />
            <Digit num={timeLeft[2]} time={"minutes"} />
            <Digit num={timeLeft[3]} time={"seconds"} />
        </div>
    </div>
  )
}

const Digit : React.FC<ICounter> = ({num, time} : ICounter) => {
    return (
        <div className="flex flex-col justify-evenly items-center m-2 mx-6">
            <span className="text-5xl text-theme">{num}</span>
            <span className="text-sm font-light">{time}</span>
        </div>
    )
}

export default CountDown