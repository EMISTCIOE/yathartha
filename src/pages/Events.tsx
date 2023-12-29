import { _Events } from "../assets/data/MoreInfo"
import EventCard from "../components/EventCard"

const Events : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center w-[100%] bg-theme-black-alt pt-[8vh]">
        <div className="flex justify-evenly flex-col items-center">
            <h1 className="text-theme text-4xl font-bold">Events</h1>
            <hr className="w-[8rem] border-2 border-theme-green rounded-xl my-2"/>
        </div>
        <div className="flex justify-around items-center flex-row flex-wrap w-[100%]">
            {
                _Events.map(({title, date, duration, thumbnail, description})=>
                {
                    return <EventCard title={title} date={date} duration={duration} thumbnail={thumbnail} description={description} />
                })
            }
        </div>
    </section>
  )
}

export default Events