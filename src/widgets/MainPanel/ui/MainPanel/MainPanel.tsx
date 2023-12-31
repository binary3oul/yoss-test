import { FC, useState } from "react";
import Card from "../Card"
import SlidingPane from "react-sliding-pane"
import "react-sliding-pane/dist/react-sliding-pane.css";
import { SiderPanel } from "@/widgets/SiderPanel"

const MainPanel: FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const freelancers = [
    {
      photo: "/photo/1.png",
      name: "Andi Lane",
      score: "4",
      rate: 18,
      coverLetter: "Hi My name's Andi, i can help with any thing."
    },
    {
      photo: "/photo/2.png",
      name: "Rene Wells",
      score: "3.4",
      rate: 20,
      coverLetter: "Hi My name's Rene, i can help with any thing related to care, all bio goes here"
    },
    {
      photo: "/photo/3.png",
      name: "Lana Lyne",
      score: "3.4",
      rate: 23,
      coverLetter: "Hi My name's Lana, i can help with any thing related to care, all bio goes here"
    },
    {
      photo: "/photo/4.png",
      name: "Mina Rhodes",
      score: "3",
      rate: 20,
      coverLetter: "Hi My name's Mina, i can help with any thing related to care, all bio goes here"
    },
  ]
  return (
    <div className="w-full flex flex-col gap-5 items-center mt-5">
      <div className="flex justify-between w-4/5 lg:justify-end">
        <button className="flex gap-1 px-4 py-2 border-[1px] bg-white border-gray-300 rounded-lg cursor-pointer items-center lg:hidden" 
          onClick={() => {setIsFiltersOpen(true)}}>
          <img src="/icons/filter-lines.svg" />Filters
        </button>
        <div className="flex gap-2 w-4/5 justify-end items-center">
          <strong>Sort By</strong>
          <select className="select select-bordered max-w-xs">
            <option>Relevance</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      
      {freelancers.map((freelancer, index) => 
        <Card { ...freelancer } key={index} />
      )}
      <div className="flex gap-0">
        <button className="p-3 btn w-10 bg-[#9E77ED] hover:bg-purple-400 text-white">1</button>
        <button className="p-3 btn w-10 bg-white border-none">2</button>
        <button className="p-3 btn w-10 bg-white border-none">3</button>
        <button className="p-3 btn w-10 bg-white border-none">...</button>
        <button className="p-3 btn w-10 bg-white border-none">8</button>
        <button className="p-3 btn w-10 bg-white border-none">9</button>
        <button className="p-3 btn w-10 bg-white border-none">10</button>
      </div>
      <SlidingPane
        closeIcon={<div>&times;</div>}
        isOpen={isFiltersOpen}
        title="Filters"
        from="bottom"
        width="100%"
        onRequestClose={() => setIsFiltersOpen(false)}
      >
        <SiderPanel />
      </SlidingPane>
    </div>
  )
};

export default MainPanel;