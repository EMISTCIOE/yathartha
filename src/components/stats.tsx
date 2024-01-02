import { useState, useEffect } from 'react';
import '../styles/stats.css';
import { _EventTarget } from '../assets/data/Yathartha';

interface IStatsItem {
  title : string,
  count : number,
  currCount : number
};

const Stats = () => {
  const [target, setTarget] = useState<number[]>([0,0,0,0]);

  const animationDuration = 25;

  useEffect(() => {
    const targetInterval = setInterval(() => {
      setTarget((target) => {
        return [target[0] + (_EventTarget[0].count / animationDuration),
        target[1] + (_EventTarget[1].count / animationDuration),
        target[2] + (_EventTarget[2].count / animationDuration),
        target[3] + (_EventTarget[3].count / animationDuration)]
      }
      );
    }, 50);
    return () => {
      clearInterval(targetInterval);
    };
  }, []);

  return (
    <div className="bg-theme-red flex flex-row justify-around p-8 items-center flex-wrap">
        {
          _EventTarget.map(({title, count}, ind)=>
          {
            return <StatsItem title={title} count={count} currCount={target[ind]} />
          })
        }
    </div>
  );
};

const StatsItem : React.FC<IStatsItem> = ({title, count, currCount}) => {
  return (
    <div className="rounded-xl p-2 my-8 shadow-[inset_5px_5px_10px_#641E3F,inset_-5px_-5px_10px_#A21E3F] sm:flex-1 sm:m-2 m-8 w-[100%]">
      <div className="m-8 text-center">
            <h2 className="text-xl font-bold text-theme-white">{title}</h2>
            <p className="text-theme text-4xl font-bold m-4">{Math.min(currCount, count).toFixed(0)}<sup>+</sup></p>
      </div>
    </div>

  )
}


export default Stats;
