import { FC } from "react";
import { SiderPanel } from "@/widgets/SiderPanel"
import { MainPanel } from "@/widgets/MainPanel"

const Home: FC = () => {
  return (
    <div className="flex">
      <div className="lg:block hidden w-96 min-w-96">
        <SiderPanel />
      </div>
      <MainPanel />
    </div>
  );
};

export default Home;
