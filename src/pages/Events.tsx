import {_PreEvents, _MainEvents } from "../assets/data/MoreInfo";
import EventCard from "../components/EventCard";

const Events : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center w-[100%] bg-theme-black-alt pt-[5rem]">
        <div className="flex flex-col justify-evenly items-center my-8">
            <h1 className="text-theme-red text-3xl uppercase font-bold my-4">Pre-events</h1>
            <hr className="w-[8rem] border-2 border-theme-green rounded-xl mb-8"/>
            <div className="flex justify-evenly items-center flex-row flex-wrap w-[100%]">
                {
                    _PreEvents.map(({thumbnail, organizer, events})=>
                    {
                        return <EventCard thumbnail={thumbnail} organizer={organizer} events={events} />
                    })
                }
            </div>
        </div>
        <div className="flex flex-col justify-evenly items-center my-8">
            <h1 className="text-theme-red text-3xl uppercase font-bold my-4">Main Events</h1>
            <hr className="w-[8rem] border-2 border-theme-green rounded-xl mb-8"/>
            <div className="flex justify-evenly items-center flex-row flex-wrap w-[100%]">
                {
                    _MainEvents.map(({thumbnail, organizer, events})=>
                    {
                        return <EventCard thumbnail={thumbnail} organizer={organizer} events={events} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Events