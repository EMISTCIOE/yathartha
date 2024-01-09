import "../styles/schedule.css";
import { _EventsDate } from "../assets/data/MoreInfo";

interface IEventDate {
  id: number;
  day: number;
  time: string;
  title: string;
  description: string[];
  setting: string;
};

const Schedule : React.FC = () => {
  _EventsDate.sort((a,b)=>a.day-b.day);

  return (
    <div className="flex flex-col justify-evenly items-center bg-theme-black-alt text-white py-8 w-[100%]">
      <div className="flex flex-col justify-evenly items-center">
          <h1 className="text-theme text-4xl font-bold">Schedule</h1>
          <hr className="w-[10rem] border-2 border-theme-green my-6 rounded-xl" />
      </div>
      <div className="flex flex-col justify-evenly items-center w-[80%]">
        {
          _EventsDate.map(({id, day, time, title, description, setting}) => {
              return  <EventDateItem key={id} id={id} day={day} time={time} title={title} description={description} setting={setting} />
          })
        }
      </div>
    </div>
  );
};

const EventDateItem : React.FC<IEventDate> = ({day, time, title, description, setting}) =>
{
  return ( 
    <div className="text-justify w-[100%] border-b-2 py-6 border-b-theme-red">
      <h2 className="text-theme text-2xl font-extrabold">Day - {day}</h2>
      <div className="flex flex-row justify-between items-center w-[100%] flex-wrap">
        <div className="lg:w-[50%] w-[100%]">
          <div className="time text-xl text-theme-red">{time}</div>
          <div className="text-xl font-bold mt-2">{title}</div>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div className="py-2">
            {description.map((paragraph, index) => (
              <p key={index} className="my-2">{paragraph}</p>
            ))}
          </div>
          <div className="text-theme-green font-bold">{setting}</div>
        </div>
      </div>
    </div>
  )
}

export default Schedule;

