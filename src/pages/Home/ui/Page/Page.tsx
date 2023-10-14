import { FC } from "react";
import { SiderPanel } from "@/widgets/SiderPanel"
import { MainPanel } from "@/widgets/MainPanel"

const Home: FC = () => {
  return (
    <>
      <div className="flex">
        <SiderPanel />
        <MainPanel />
      </div>
    </>
  );
};

export default Home;
