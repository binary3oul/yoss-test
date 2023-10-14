import { FC } from "react";

const MainPanel: FC = () => {
  const freelancers = [
    {
      photo: "",
      name: "Andi Lane",
      score: "4",
      rate: 18,
      coverLetter: "Hi My name's Andi, i can help with any thing."
    },
    {
      photo: "",
      name: "Rene Wells",
      score: "3.4",
      rate: 20,
      coverLetter: "Hi My name's Rene, i can help with any thing related to care, all bio goes here"
    },
    {
      photo: "",
      name: "Lana Lyne",
      score: "3.4",
      rate: 23,
      coverLetter: "Hi My name's Lana, i can help with any thing related to care, all bio goes here"
    },
    {
      photo: "",
      name: "Mina Rhodes",
      score: "3",
      rate: 20,
      coverLetter: "Hi My name's Mina, i can help with any thing related to care, all bio goes here"
    },
  ]
  return (
      <div className="w-full flex flex-col gap-5 items-center">
        <div className="flex gap-2 w-4/5 justify-end items-center">
          <strong>Sort By</strong>
          <select className="select select-bordered max-w-xs">
            <option>Relevance</option>
            <option>Greedo</option>
          </select>
        </div>
        {freelancers.map((freelancer, index) => {
          const { name, rate, coverLetter } = freelancer
          return <div className="card w-4/5 shadow-xs h-28 flex flex-row bg-[#EAECF0AD] gap-5">
            <div className="flex items-center"><img src={`/photo/${index+1}.png`} alt="photo" className="pl-3" /></div>
            <div className="flex flex-col gap-1 py-3">
              <h2 className="card-title">{name}</h2>
              <div className="flex gap-12">
                <strong>${rate}/<sub>Hr</sub></strong>
                <div className="rating gap-1">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                </div>
              </div>
              <p className="text-sm">{coverLetter}</p>
            </div>
          </div>
        })}
        <div className="flex gap-0">
          <button className="p-3 btn w-10 bg-[#9E77ED] hover:bg-purple-400 text-white">1</button>
          <button className="p-3 btn w-10 bg-white border-none">2</button>
          <button className="p-3 btn w-10 bg-white border-none">3</button>
          <button className="p-3 btn w-10 bg-white border-none">...</button>
          <button className="p-3 btn w-10 bg-white border-none">8</button>
          <button className="p-3 btn w-10 bg-white border-none">9</button>
          <button className="p-3 btn w-10 bg-white border-none">10</button>
        </div>
      </div>
  )
};

export default MainPanel;