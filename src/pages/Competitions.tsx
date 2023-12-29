import EventCard from "../components/EventCard";
import { _Competitions } from "../assets/data/MoreInfo";

const Competitions = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center w-[100%] bg-theme-black-alt pt-[8vh]">
        <div className="flex justify-evenly flex-col items-center">
            <h1 className="text-theme text-4xl font-bold">Competitions</h1>
            <hr className="w-[8rem] border-2 border-theme-green rounded-xl my-2"/>
        </div>
        <div className="flex justify-around items-center flex-row flex-wrap w-[100%]">
            {
                _Competitions.map(({title, date, duration, thumbnail, description})=>
                {
                    return <EventCard title={title} date={date} duration={duration} thumbnail={thumbnail} description={description} />
                })
            }
        </div>
    </section>
  )
}

export default Competitions