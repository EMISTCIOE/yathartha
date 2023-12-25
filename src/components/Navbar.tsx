import React from 'react';
import { _NavItems } from '../assets/data/Yathartha';

interface INavItem
{
    item : string,
    url : string
};

const Navbar : React.FC = () => {
  return (
    <nav className="flex flex-row justify-evenly items-center w-[100%] fixed z-10">
        {
            _NavItems.map(({item, url})=>
            {
                return <NavItem item={item} url={url} />
            })
        }
    </nav>
  )
}

const NavItem : React.FC<INavItem> = ({item, url} : INavItem) =>
{
    return (
        <a href={url} className="p-4 mx-2 font-bold text-white transition duration-200 hover:scale-[105%] hover:text-theme-alt">{item}</a>
    )
}

export default Navbar