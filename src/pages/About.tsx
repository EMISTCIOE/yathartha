import { _EventDetails } from '../assets/data/Yathartha';
import Logo from "../assets/logo.jpg";
import Stats from '../components/stats';

const About : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center bg-theme-black-alt w-[100%]">
        <div className="flex flex-col w-[100%] justify-evenly items-center mt-4 text-center">
            <h1 className="text-theme sm:text-4xl text-3xl font-bold">{"About " + _EventDetails.name + " TechFest"} </h1>
            <hr className="w-[20%] border-2 border-theme-green rounded-xl m-8"/>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly items-center w-[100%]">
            <p className="text-theme-white lg:w-[30rem] w-[85%] text-justify tracking-wide text-lg">{_EventDetails.about}</p>
            <div className="lg:w-[50%] w-[100%] xl:h-[25rem] h-[20rem] my-8 bg-theme-white rounded-xl overflow-hidden"><img src={Logo} className="h-[100%] m-auto" /></div>
        </div>
        <div className="flex flex-col w-[100%]">
            <Stats/>
        </div>
    </section>
  )
}

export default About