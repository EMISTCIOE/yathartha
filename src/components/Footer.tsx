import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import "../styles/footer.css"
import { Socials } from "./Navbar";
import { _EventDetails, _QuickLinks } from "../assets/data/Yathartha";

import { FaMobileScreen, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer : React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="lg:px-16 px-2 p-8 bg-theme-black text-theme-white text-center">
      <div className="flex md:flex-row flex-col justify-evenly items-center md:items-start min-h-[10rem]">
        <div className="flex flex-col justify-evenly items-center m-2">
          <img src={Logo} alt="Logo" className="w-[2rem]"/>
          <h1 className="text-theme text-4xl font-bold">{_EventDetails.name}</h1>
          <span>{_EventDetails.mainquote}</span>
        </div>
        <div className="flex flex-col justify-evenly items-center m-2 md:items-start">
          <h1 className="text-theme-red text-xl font-bold">Quick Links</h1>
          <ul className="flex flex-col md:items-start justify-evenly items-center">
            {
              _QuickLinks.map(({item, url})=>
              {
                return <li className="m-[0.2rem] hover:underline underline-offset-2 hover:text-theme">
                  {/* <a href={url}>{item}</a> */}
                  <NavLink to={url}>{item}</NavLink>
                  </li>
              })
            }
          </ul>
        </div>
        <div className="flex flex-col justify-evenly items-center m-2 text-sm md:items-start">
          <h1 className="text-theme-red text-xl font-bold">Contact Us</h1>
          <div className="flex items-center">
            <FaMobileScreen />
            <span className="m-2">{_EventDetails.contact.phone}</span>
          </div>

          <div className="flex items-center">
            <FaRegEnvelope />
            <a href="mailto:yathartha@tcioe.edu.np" className="m-2">{_EventDetails.contact.email}</a>
          </div>

          <div className="flex items-center">
            <FaLocationDot />
            <a href="https://maps.app.goo.gl/99kCXfQCxWZXVRZG6" className="m-2">{_EventDetails.location}</a>
          </div>
        </div>
      </div>
      <div className="text-theme-white text-center">
        <span className="text-xl text-theme-red font-bold">Connect with us on:</span>
        <div className="text-4xl mx-auto w-[30%] my-4">
          <Socials />
        </div>
        <div className="m-4 font-light">
          Copyright &copy; {currentYear} | <span className="text-theme font-bold">{_EventDetails.name}</span> | All rights reserved.
        </div>
        <div className="mt-6 text-theme-green text-lg">
          Designed with ❤️ by <a href="https://ecast.tcioe.edu.np" target="_blank"><span className="font-bold text-xl">&nbsp;ECAST</span></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
