import { FC } from "react";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider"

const Schedule: FC = () => {
  return (
    <>
      <label className="text-black text-xs">Dates</label>
      <div className="relative">
      <input type="date" className={`block w-full p-2 text-sm text-gray-900 border-[#9E77ED] border-[1px] rounded-lg bg-gray-50`} placeholder="Search" />
      </div>
      <div className="relative">
      <input type="date" className={`block w-full p-2 text-sm text-gray-900 border-[#9E77ED] border-[1px] rounded-lg bg-gray-50`} placeholder="Search" />
      </div>
      <MultiRangeSlider min={0} max={1000} onChange={(e) => e} />
    </>
  );
};

export default Schedule;
