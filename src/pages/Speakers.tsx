import { _Speakers } from "../assets/data/MoreInfo";
import SpeakerCard from "../components/SpeakerCard";

const Speakers = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-theme-black-alt min-h-[100vh] pt-[8rem]">
        <div className="flex flex-col justify-evenly items-center">
            <h1 className="text-3xl text-theme font-bold">Our Speakers</h1>
            <hr className="w-[10rem] border-theme-green my-2"/>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-2">
            {
                _Speakers.map(({name, image, field})=>
                {
                    return <SpeakerCard name={name} image={image} field={field} />
                })
            }
        </div>
    </div>
  )
}

export default Speakers