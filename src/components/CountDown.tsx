interface ICounter{
    num : string,
    time : string
};

interface ICharacter
{
    character : string
};

const CountDown : React.FC = () => {
  return (
    <div className="animate-border bg-gradient-to-r from-theme via-theme-red to-theme bg-[length:400%_400%] rounded-xl p-[0.25rem] m-6 text-theme-white">
        <div className="flex flex-row md:flex-col">
        <div className="bg-theme-white flex md:flex-row flex-col justify-evenly rounded-xl p-6 m-2">
            <CharDigit character="E"/>
            <CharDigit character="N"/>
            <CharDigit character="D"/>
            <CharDigit character="E"/>
            <CharDigit character="D"/>
        </div>
        <div className="bg-theme-white flex md:flex-row flex-col justify-evenly rounded-xl p-6 m-2">
            <Digit num={'-'} time={"days"} />
            <Digit num={'-'} time={"hours"} />
            <Digit num={'-'} time={"minutes"} />
            <Digit num={'-'} time={"seconds"} />
        </div>
        </div>
    </div>
  )
}

const CharDigit : React.FC<ICharacter> = ({character})=>
{
    return (
    <div className="flex flex-col justify-evenly items-center m-2 mx-6">
        <span className="text-6xl md:text-8xl text-theme font-bold">{character}</span>
    </div>
    )
}

const Digit : React.FC<ICounter> = ({num, time} : ICounter) => {
    return (
        <div className="flex flex-col justify-evenly items-center m-2 mx-6">
            <span className="text-5xl text-theme font-bold">{num}</span>
            <span className="text-sm text-black font-light">{time}</span>
        </div>
    )
}

export default CountDown