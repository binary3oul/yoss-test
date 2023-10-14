import { FC } from "react";
import Accordion from "../Accordion/Accordion"
import Location from "../Care/Location"
import Schedule from "../Care/Schedule"

const SiderPanel: FC = () => {
  return (
    <div className="w-96 min-w-96 p-4 pb-9 lg:block hidden bg-[#9E77ED1F] shadow-[4px_0_16px_2px_rgba(0,0,0,0.03)]">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-2 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search" required />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-1 px-4 py-2 border-[1px] bg-white border-gray-300 rounded-lg cursor-pointer"><img src="/icons/filter-lines.svg" />Filters</div>
        <div className="flex gap-1 px-4 py-2 border-[1px] bg-white border-gray-300 rounded-lg cursor-pointer">Clear All<img src="/icons/x-close.svg" /></div>
      </div>
      <Accordion 
        data = {[
          {
            icon: "/icons/1.svg",
            header: "Care Type", 
            text: <>123123</> ,
            active: false
          },
          {
            icon: "/icons/3.svg",
            header: "Care Frequency", 
            text: "It takes 2-3 weeks to get your first blog post ready. ",
            active: false
          },
          {
            icon: "/icons/2.svg",
            header: "Care Location", 
            text: <Location />,
            active: true
          },
          {
            icon: "/icons/4.svg",
            header: "Care Schedule", 
            text: <Schedule />,
            active: true
          },
          {
            icon: "/icons/5.svg",
            header: "Care Pricing", 
            text: "It takes 2-3 weeks to get your first blog post ready. ",
            active: false
          },
          {
            icon: "/icons/6.svg",
            header: "Care Seeking", 
            text: "It takes 2-3 weeks to get your first blog post ready. ",
            active: false
          }
        ]}
      />
    </div>
  )
};

export default SiderPanel;