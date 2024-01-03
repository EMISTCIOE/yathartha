import { _EventDetails } from '../assets/data/Yathartha';
import Logo from "../assets/logo.jpg";
import Stats from '../components/stats';

const About : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center bg-theme-black-alt w-[100%]">
        <div className="flex flex-col w-[100%] justify-evenly items-center mt-4">
            <h1 className="text-theme text-4xl font-bold">{"About " + _EventDetails.name + " TechFest"} </h1>
            <hr className="w-[20rem] border-2 border-theme-green rounded-xl m-8"/>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly items-center w-[100%]">
            <p className="text-theme-white lg:w-[30rem] w-[80%] text-justify">{_EventDetails.about}</p>
            <div className="xl:w-[35rem] w-[30rem] xl:h-[25rem] h-[20rem] my-8 bg-theme-white rounded-xl overflow-hidden"><img src={Logo} className="h-[100%]" /></div>
        </div>
        <div className="flex flex-col w-[100%]">
            <Stats/>
        </div>
    </section>
  )
}

export default About