import { _EventDetails } from "../assets/data/Yathartha";
import { FaLocationDot, FaMobileScreen, FaRegEnvelope } from "react-icons/fa6";
import HeroImage from "../assets/hero.jpeg";

const ContactUs = () => {
  return (
    <section className="flex flex-col justify-evenly items-center min-h-[100vh] text-white w-[100%]">
        <img src={HeroImage} className="absolute top-0 left-0 w-[100%] h-[100%] brightness-50 -z-10 object-cover"/>
        <div className="flex flex-col items-center">
            <h1 className="text-theme text-3xl font-bold">Contact Us</h1>
            <hr className="w-[8rem] border-2 border-theme-green my-2"/>
        </div>
        <div className="flex flex-col justify-evenly items-center p-2 xl:text-2xl text-xl font-bold w-[100%] text-center">
            <span className="flex sm:flex-row flex-col items-center my-4"><FaMobileScreen /> &nbsp;{_EventDetails.contact.phone}</span>
            <a href="mainto:techfest@tcioe.edu.np" className="flex sm:flex-row flex-col items-center my-4"><FaRegEnvelope /> &nbsp;{_EventDetails.contact.email}</a>
            <a href="https://maps.app.goo.gl/99kCXfQCxWZXVRZG6" className="flex sm:flex-row flex-col items-center my-4"><FaLocationDot /> &nbsp;{_EventDetails.location}</a>
        </div>
    </section>
  )
}

export default ContactUs
