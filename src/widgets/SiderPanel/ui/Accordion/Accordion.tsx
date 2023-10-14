import { FC } from "react";
import { Accordion } from "../../model/types";
import AccordionItem from "./AccordionItem";

const Accordion: FC<Accordion> = ({ data }: Accordion) => {
  return (
    <section className="relative z-20 overflow-hidden pt-20 pb-12 lg:pt-[12px] lg:pb-[9px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {
              data.map((item, idx) => (
              <AccordionItem
                data={
                  item
                }
                key = {idx}
              />))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;


