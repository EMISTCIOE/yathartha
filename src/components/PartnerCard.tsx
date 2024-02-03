
interface IPartnerCard {
    rank : string,
    name : string,
    image : string
};

const PartnerCard : React.FC<IPartnerCard> = ({rank, name, image}) => {
  return (
    <div className=" bg-theme-green flex flex-col justify-evenly items-center m-4 max-w-[26rem] w-[24rem] max-h-[20rem] h-[15rem] relative hover:scale-[105%] transition-transform duration-300">
       <div className="absolute h-[100%] w-[100%] z-10 flex flex-col justify-between items-center">
            <span className="text-sm text-theme-red font-bold p-1 min-w-[80%] bg-theme-white rounded-bl-md rounded-br-md text-center">{name}</span>
            <span className="text-lg text-theme-white p-2 bg-theme rounded-tl-xl rounded-tr-xl">{rank}</span>
       </div>
        <img src={image} className="max-h-[100%] max-w-[100%] scale-[125%] p-16 brightness-90"/>
    </div>
  )
}

export default PartnerCard