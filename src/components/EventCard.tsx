import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


interface IEventCard {
  thumbnail : string,
  organizer : string,
  events : string[]
};

const EventCard : React.FC<IEventCard> = ({thumbnail, organizer, events}) => 
{
  return (
        <div className="flex flex-row justify-evenly items-center rounded-sm  m-4 my-8 lg:w-[40%] w-[100%] min-h-[20rem] backdrop-blur-xl bg-[#ffffff09] shadow-sm shadow-[#fff4] p-2">
            <div className="w-[40%]">
                <img src={thumbnail} className="w-[100%] mx-[-20%] rounded-md" />
            </div>
            <div className="text-white flex justify-evenly flex-col h-[100%] w-[50%] items-start">
                <h1 className="text-theme text-2xl font-bold">{organizer}<hr className="border-theme-red border-2 my-[0.2rem] w-[80%]" /></h1>
                <ul className="text-theme-green list-disc">
                  {
                    events.map((event)=>{
                      return <li className="my-2 text-md font-medium">{event}</li>
                    })
                  }
                </ul>
            </div>
            <Link to={window.location.href+"/"+organizer} className="text-theme sm:text-6xl text-3xl hover:scale-[105%] hover:translate-x-2 transition-transform duration-200"><IoIosArrowForward /></Link>
        </div>
  )
}

export default EventCard