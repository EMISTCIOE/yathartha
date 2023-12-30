
interface ISpeakerCard {
    name : string,
    image : string,
    field : string
};

const SpeakerCard : React.FC<ISpeakerCard> = ({name, image, field}) => {
  return (
    <div className="flex flex-col justify-evenly items-center m-4 border border-theme-red rounded-lg w-[18rem] hover:bg-theme-red hover:translate-y-[-0.4rem] transition-all duration-200">
        <img src={image} className="w-[100%]"/>
        <div className="my-4 text-center font-bold">
            <h1 className="text-theme text-2xl">{name}</h1>
            <span className="text-theme-green text-lg ">{field}</span>
        </div>
    </div>
  )
}

export default SpeakerCard