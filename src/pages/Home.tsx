import {  _EventDetails } from "../assets/data/Yathartha.ts" ;
import CountDown from "../components/CountDown.tsx";

const Home : React.FC = () => {
    return (
        <main className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%] bg-theme-black-alt">
            <div className="flex flex-col justify-evenly md:items-start items-center md:w-[80%] w-[100%] mt-[10%]">
                <h1 className="text-theme-white text-7xl font-bold my-4">{_EventDetails.name}</h1>
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