
interface IPartnerCard {
    rank : string,
    name : string,
    image : string
};

const PartnerCard : React.FC<IPartnerCard> = ({rank, name, image}) => {
  return (
    <div className=" bg-theme-green flex flex-col justify-evenly items-center m-4 w-[25rem] max-h-[20rem] relative hover:scale-[105%] transition-transform duration-300">
       <div className="absolute h-[100%] w-[100%] z-10 flex flex-col justify-between items-center">
            <span className="text-2xl text-theme-red text-bold p-2 px-4 bg-theme-white rounded-bl-md rounded-br-md">{name}</span>
            <span className="text-lg text-theme-white p-2 bg-theme rounded-tl-xl rounded-tr-xl">{rank}</span>
       </div>
        <img src={image} className="h-[100%] p-16 brightness-90"/>
    </div>
  )
}

export default PartnerCard