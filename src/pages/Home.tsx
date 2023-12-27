import {  _EventDetails } from "../assets/data/Yathartha.ts" ;
import CountDown from "../components/CountDown.tsx";
import HeroImage from "../assets/hero.jpeg";

const Home : React.FC = () => {
    return (
        <main className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%]">
            <img src={HeroImage} className="absolute top-0 left-0 w-[100%] h-[160%] brightness-75 -z-10"/>
            <div className="flex flex-col justify-evenly md:items-start items-center md:w-[80%] w-[100%] mt-[10%]">
                <h1 className="text-8xl font-extrabold my-4 text-theme">{_EventDetails.name}</h1>
                <h2 className="text-theme-white text-5xl">{_EventDetails.type}</h2>
                <span className="text-theme-white text-2xl tracking-wider my-2">{_EventDetails.mainquote}</span>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <h1 className="text-theme-white text-3xl ">{_EventDetails.date}</h1>
                <CountDown />
            </div>
        </main>
    )
}

export default Home