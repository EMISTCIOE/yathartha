import { _SocialLinks } from "../assets/data/Yathartha"


const Footer = () => {
  return (
    <footer className="flex flex-col justify-evenly items-center w-[100%] min-h-[20rem] bg-theme-alt">
        <Socials />
        <Copyright />
    </footer>
  )
}

const Socials : React.FC = () =>
{
    return (
        <ul className="w-[50%] h-[10rem] flex flex-col justify-evenly items-center text-white">
            {
                _SocialLinks.map(({media, url})=>
                {
                    return <li><a href={url}  className="p-2 m-2 rounded-sm hover:underline hover:underline-offset-2 transition-all duration-300">{media}</a></li>
                })
            }
        </ul>
    )
}

const Copyright : React.FC = () =>
{
    return (
        <p className="text-theme">All Copyright reserved © 2024</p>
    )
}

export default Footer