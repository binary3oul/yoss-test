import { FC } from "react";
import Accordion from "../Accordion/Accordion"
const SiderPanel: FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required />
      </div>
      <div>
        <Accordion 
          data = {[
            {
              icon: "",
              header: "Care Type", 
              text: <>123123</> 
            },
            {
              icon: "",
              header: "Care Frequency", 
              text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            },
            {
              icon: "",
              header: "Care Location", 
              text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            },
            {
              icon: "",
              header: "Care Location", 
              text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            },
            {
              icon: "",
              header: "Care Location", 
              text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            },
            {
              icon: "",
              header: "Care Location", 
              text: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            }
          ]}
        />
      </div>
    </>
  )
};

export default SiderPanel;