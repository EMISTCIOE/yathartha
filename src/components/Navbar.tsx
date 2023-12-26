import React, { useState, useEffect } from 'react';
import {
    FaLinkedin,
    FaInstagram,
    FaFacebook,
}from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

import { _NavItems, _SocialLinks } from '../assets/data/Yathartha';
import Logo from "../assets/logo.jpg";

interface INavItem
{
    item : string,
    url : string
};

const Navbar : React.FC = () => {
    const [isMobActive, setIsMobActive] = useState<boolean>(false);
    const [isNavActive, setIsNavActive] = useState<boolean>(true);

    const handleResize = () => {
        if(window.innerWidth <1024){
            setIsMobActive(true);
        }
        else if(window.innerWidth >1024)
        {
            setIsMobActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

  return (
      <>
        <button className="lg:hidden z-20 fixed top-8 right-8 text-4xl hover:text-theme-red text-white" onClick={()=>setIsNavActive(!isNavActive)}>{isNavActive?<IoClose />:<IoMenu />}</button>
        {
            <nav className={(isMobActive?(isNavActive?"flex":"hidden"):"flex") + " lg:flex-row flex-col justify-evenly items-center w-[100%] fixed z-10 bg-theme-black lg:h-[5rem] h-[100vh]"}>
                <img src={Logo} className="lg:h-[100%] h-[10%]"/>
                <NavLinks />
                <div className="lg:w-[10%] w-[100%] lg:text-2xl text-4xl text-theme-white">
                    <Socials />
                </div>
            </nav>
        }
    </>
  )
}

const NavLinks : React.FC = () => {

    return (
        <div className="flex lg:flex-row flex-col justify-evenly items-center w-[70%]">
            {
                _NavItems.map(({item, url})=>
                {
                    return <NavItem item={item} url={url} />
                })
            }
        </div>
    )
}

const Socials : React.FC = () => {
    return (
        <div className="flex flex-row justify-evenly items-center">
            {
                _SocialLinks.map(({media, url})=>
                {
                    return <a href={url} className="hover:scale-[105%] mx-2">{media==="Facebook"?<FaFacebook />:media=="Instagram"?<FaInstagram />:media=="Linkedin"?<FaLinkedin />:null}</a>
                })
            }
        </div>
    )
}

const NavItem : React.FC<INavItem> = ({item, url} : INavItem) => {
    return (
        <a href={url} className="p-2 lg:mx-2 my-2 font-medium text-white transition duration-200 hover:scale-[105%] hover:text-theme">{item}</a>
    )
}

export default Navbar;
export { Socials }