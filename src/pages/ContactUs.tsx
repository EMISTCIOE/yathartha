import { _EventDetails } from "../assets/data/Yathartha";
import { FaLocationDot, FaMobileScreen, FaRegEnvelope } from "react-icons/fa6";
import HeroImage from "../assets/hero.jpeg";

const ContactUs = () => {
  return (
    <section className="flex flex-col justify-evenly items-center min-h-[100vh] text-white">
        <img src={HeroImage} className="absolute top-0 left-0 w-[100%] h-[100%] brightness-50 -z-10 object-cover"/>
        <div className="flex flex-col items-center">
            <h1 className="text-theme text-3xl font-bold">Contact Us</h1>
            <hr className="w-[8rem] border-2 border-theme-green my-2"/>
        </div>
        <div className="flex flex-col justify-evenly items-center m-2 xl:text-2xl text-xl font-bold">
          <div className="flex items-center">
            <FaMobileScreen />
            <span className="m-2">{_EventDetails.contact.phone}</span>
          </div>

          <div className="flex items-center">
            <FaRegEnvelope />
            <a href="mainto:techfest@tcioe.edu.np" className="m-2">{_EventDetails.contact.email}</a>
          </div>

          <div className="flex items-center">
            <FaLocationDot />
            <span className="m-2">{_EventDetails.location}</span>
          </div>
        </div>
    </section>
  )
}

export default ContactUs