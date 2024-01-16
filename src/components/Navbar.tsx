import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
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

const Navbar : React.FC<React.Dispatch<React.SetStateAction<boolean>>> = () => {
    const [isMobActive, setIsMobActive] = useState<boolean>(false);
    const [isNavActive, setIsNavActive] = useState<boolean>(false);
    const [scrollActive, setScrollActive] = useState<boolean>(false);

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
        handleResize();
        window.addEventListener("resize", handleResize);

        const handleScroll = () => {
            if(window.scrollY < 50)
            {
                setScrollActive(false);
            }
            else if(window.scrollY > 10)
            {
                setScrollActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

  return (
      <>
        <button className="lg:hidden z-50 fixed top-4 right-4 text-4xl hover:text-theme-red text-theme" onClick={()=>setIsNavActive(!isNavActive)}>{isNavActive?<IoClose />:<IoMenu />}</button>
        {
            <nav className={(isMobActive?(isNavActive?"flex bg-theme-black":"hidden"):" flex") + " lg:flex-row flex-col justify-evenly items-center w-[100%] fixed z-40 lg:h-[5rem] h-[100vh] " + (scrollActive?" bg-theme-black":"")}>
                <NavLink to="/home" className="lg:h-[100%] h-[10%]"><img src={Logo} className="h-[100%]" /></NavLink>
                <NavLinks hideNavOnClick={setIsNavActive} />
                <div className="lg:w-[10%] w-[100%] lg:text-2xl text-4xl text-theme-white">
                    <Socials />
                </div>
            </nav>
        }
    </>
  )
}

const NavLinks : React.FC<any> = ({hideNavOnClick}) => {

    return (
        <div className="flex lg:flex-row flex-col justify-evenly items-center w-[60%] px-[10%]" onClick={()=>hideNavOnClick()}>
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
                    return <a href={url} target="_blank" className="hover:scale-[105%] mx-2">{media==="Facebook"?<FaFacebook />:media=="Instagram"?<FaInstagram />:media=="Linkedin"?<FaLinkedin />:null}</a>
                })
            }
        </div>
    )
}

const NavItem : React.FC<INavItem> = ({item, url} : INavItem) => {
    return (
        <NavLink to={url} className="m-2 font-medium text-white transition duration-200 hover:scale-[105%] hover:text-theme">{item}</NavLink>  
    )
}

export default Navbar;
export { Socials }