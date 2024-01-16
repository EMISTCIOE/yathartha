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
        <div className="flex flex-col justify-evenly items-center rounded-sm m-4 my-8 lg:w-[40%] w-[100%] min-h-[20rem] backdrop-blur-sm bg-[#ffffff09] shadow-sm shadow-[#fff9] p-2">
          <h1 className="text-theme text-2xl font-bold my-2">{organizer}<hr className="border-theme-red border-2 my-[0.2rem] w-[100%]" /></h1>
          <div className="text-white flex justify-between sm:flex-row flex-col h-[100%] w-[100%] items-center">
            <div className="w-[20%] xl:w-[40%]">
                <img src={thumbnail} className="w-full rounded-md bg-theme-white p-2" />
            </div>
            <ul className="text-theme-green list-disc">
              {
                events.map((event)=>{
                  return <li className="my-2 xl:text-md lg:text-sm font-medium">{event}</li>
                })
              }
            </ul>
            <Link to={window.location.href+"/"+organizer} className="text-theme xl:text-6xl text-3xl hover:scale-[105%] hover:translate-x-2 transition-transform duration-200 sm:rotate-0 rotate-90"><IoIosArrowForward /></Link>
          </div>
        </div>
  )
}

export default EventCard