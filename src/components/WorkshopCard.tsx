import { Link } from "react-router-dom";

interface IWorkshopCard {
    title : string,
    date? : string,
    duration? : string,
    thumbnail : string,
    description : string
};

const WorkshopCard : React.FC<IWorkshopCard> = ({title, date, duration, thumbnail, description}) => {
  return (
    <div className="flex flex-row justify-evenly items-center rounded-sm  m-6 lg:w-[40%] w-[100%] h-[20rem] backdrop-blur-xl bg-[#ffffff09] shadow-sm shadow-[#fff4]">
        <div className="w-[50%]">
            <img src={thumbnail} className="w-[100%] mx-[-20%] rounded-lg" />
        </div>
        <div className="text-white flex justify-evenly flex-col h-[100%] max-w-[50%] items-start">
            <h1 className="text-theme text-2xl font-bold">{title}<hr className="border-theme-green my-2 w-[50%]" /></h1>
            <div className=""><span className="text-xl font-bold">{date}</span> - <span className="text-theme-green font-bold">{duration}</span></div>
            <p className="text-sm">{description.substring(0, 70) + "..."}</p>
            <Link to={window.location.href+"/"+title} className="p-2 px-6 inline-block bg-theme mx-auto hover:scale-[105%] transition-transform duration-200">Know More</Link>
        </div>
    </div>
  )
}

export default WorkshopCard;