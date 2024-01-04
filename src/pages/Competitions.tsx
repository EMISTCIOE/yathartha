import { _Competitions } from "../assets/data/MoreInfo";
import CompetitionCard from "../components/CompetitionCard";

const Competitions = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-evenly items-center w-[100%] bg-theme-black-alt pt-[7rem]">
        <div className="flex justify-evenly flex-col items-center">
            <h1 className="text-theme text-4xl font-bold">Competitions</h1>
            <hr className="w-[8rem] border-2 border-theme-green rounded-xl my-2"/>
        </div>
        <div className="flex justify-around items-center flex-row flex-wrap w-[100%]">
            {
                _Competitions.map(({title, date, duration, thumbnail, description})=>
                {
                    return <CompetitionCard title={title} date={date} duration={duration} thumbnail={thumbnail} description={description} />
                })
            }
        </div>
    </section>
  )
}

export default Competitions