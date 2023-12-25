import {  _EventDetails } from "../assets/data/Yathartha.ts" 

const Home = () => {
    return (
        <main className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%] bg-theme">
            <h1 className="text-theme-alt text-6xl font-bold uppercase font-roboto-slab">{_EventDetails.name}</h1>
            <p className="text-white text-xl font-light font-archivo-narrow">{_EventDetails.mainquote}</p>
            <ul className="flex flex-row flex-wrap justify-evenly items-center list-none w-[100%] text-white font-bold">
            {
                _EventDetails.theme.map((item : string)=>
                {
                return <li className="bg-theme-alt p-4 min-w-[16rem] min-h-[10rem] flex flex-row justify-evenly items-center text-2xl uppercase rounded-md">{item}</li>
                })
            }
            </ul>
        </main>
    )
}

export default Home