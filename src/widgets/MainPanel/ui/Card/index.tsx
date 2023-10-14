import { FC, useState } from "react";
import { Card } from "../../model/types";

const Card: FC<Card> = ({name, rate, coverLetter, photo}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return <div className={`card w-4/5 shadow-xs h-28 flex flex-row gap-5 ${isHovered ? "bg-[#D6BBFB45] border-[#7F56D9] border-[1px]": "bg-[#EAECF0AD]"} relative`} onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="flex items-center">
      <img src={photo} alt="photo" className="pl-3" /></div>
      <div className="flex flex-col gap-1 py-3">
        <h2 className="card-title">{name}</h2>
        <div className="flex gap-12">
          <strong>${rate}/<sub>Hr</sub></strong>
          <div className="rating gap-1">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" defaultChecked={true}/>
          </div>
        </div>
        <p className="text-sm">{coverLetter}</p>
      </div>
      {isHovered ? 
      <div className="w-20 h-full bg-[#7F56D9] absolute right-0 rounded-tr-xl rounded-br-xl text-white flex items-center justify-center">
        <div className="text-4xl border-2 border-white rounded-full w-11 flex items-center justify-center cursor-pointer">
          <span className="-translate-y-1">+</span>
        </div>
      </div>
      : ""}
      
  </div>
};

export default Card;