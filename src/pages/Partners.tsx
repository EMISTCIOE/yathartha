import { _Partners } from "../assets/data/MoreInfo";
import PartnerCard from "../components/PartnerCard";

const Partners = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-theme-black-alt min-h-[100vh] pt-[8rem]">
        <div className="flex flex-col justify-evenly items-center">
            <h1 className="text-3xl text-theme font-bold">Our Partners</h1>
            <hr className="w-[10rem] border-theme-green my-2"/>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 p-2">
            {
                _Partners.map(({rank, name, image})=>
                {
                    return <PartnerCard rank={rank} name={name} image={image} />
                })
            }
        </div>
    </div>
  )
}

export default Partners