import {  _EventDetails } from "../assets/data/Yathartha.ts" ;
import CountDown from "../components/CountDown.tsx";
import HeroImage from "../assets/hero.jpeg";

const Home : React.FC = () => {
    return (
        <main className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%] relative">
            <img src={HeroImage} className="absolute top-0 left-0 min-h-[100%] xl:h-[160%] h-[160%] w-[100%] brightness-75 -z-10 object-cover"/>
            <div className="flex flex-col justify-evenly md:items-start items-center md:w-[80%] w-[100%] mt-[10%]">
                <h1 className="xl:text-8xl sm:text-7xl text-6xl font-extrabold my-4 text-theme">{_EventDetails.name}</h1>
                <h2 className="text-theme-white lg:text-5xl text-4xl">{_EventDetails.type}</h2>
                <span className="text-theme-white lg:text-2xl sm:text-xl text-sm tracking-wider my-2">{_EventDetails.mainquote}</span>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <h1 className="text-theme-white text-3xl font-bold">{_EventDetails.date}</h1>
                <CountDown />
            </div>
        </main>
    )
}

export default Home