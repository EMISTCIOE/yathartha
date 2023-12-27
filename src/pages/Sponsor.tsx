import { isArray } from "util"
import { _EventSponsors } from "../assets/data/Yathartha"
import { useState } from "react"

interface ISponsorItem {
    type : string,
    url : string[]
};

const Sponsor : React.FC = () => {
  return (
    <section className="flex flex-col justify-evenly items-center min-h-[100vh] w-[100%] bg-theme-black-alt p-16">
        <div className="flex flex-col justify-evenly items-center">
            <h1 className="text-theme text-5xl font-bold">Our Sponsors</h1>
            <hr className="w-[10rem] border-2 border-theme-green my-8 rounded-xl" />
        </div>
        <div>
            {
                _EventSponsors.map(({type, url})=>
                {
                    return <SponsorItem type={type} url={url} />
                })
            }
        </div>
    </section>
  )
}

const SponsorItem : React.FC<ISponsorItem> = ({type, url}) => {

    return (
        <div className="flex flex-col justify-evenly items-center text-white my-8">
            <h1 className="text-3xl font-semibold m-2">{type}</h1>
            <ul className="flex flex-row flex-wrap justify-evenly items-center">
                {
                    url.map((url)=>
                    {
                        return <li className="p-2 h-[10rem] w-[16rem] bg-theme-white rounded-xl m-4"><img src={url} className="m-auto h-[100%]" /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sponsor