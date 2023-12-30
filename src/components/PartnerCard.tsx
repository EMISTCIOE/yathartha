
interface IPartnerCard {
    rank : string,
    name : string,
    image : string
};

const PartnerCard : React.FC<IPartnerCard> = ({rank, name, image}) => {
  return (
    <div className="flex flex-col justify-evenly items-center m-4 w-[25rem] relative hover:scale-[105%] transition-transform duration-300">
       <div className="absolute h-[100%] w-[100%] z-10 flex flex-col justify-between items-center">
            <span className="text-2xl text-theme-green text-bold p-2 px-4 bg-theme-white rounded-bl-xl rounded-br-xl">{name}</span>
            <span className="text-lg text-theme-red p-2 bg-theme rounded-tl-xl rounded-tr-xl">{rank}</span>
       </div>
        <img src={image} className="w-[100%] brightness-90"/>
    </div>
  )
}

export default PartnerCard