import { Link } from "react-router-dom"

const NotFound : React.FC = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly pt-[10vh] items-center w-[100%] bg-theme-black-alt">
        <div>
            <h1 className="text-theme-red text-4xl font-bold">Oops!</h1>
            <span className="text-theme xl:text-[22rem] text-[12rem] font-extrabold">404</span>
        </div>
        <h1 className="text-theme-red text-4xl font-bold">Page Not Found</h1>
        <Link to="/home" className="p-4 px-8 font-bold bg-theme-green text-theme-white text-xl rounded-sm hover:translate-y-[-5px] transition-all duration-300">Home</Link>
    </section>
  )
}

export default NotFound