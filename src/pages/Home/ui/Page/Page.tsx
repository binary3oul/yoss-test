import { FC } from "react";
import {SiderPanel} from "@/widgets/SiderPanel"

const Home: FC = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/3 p-4 pb-9 lg:block hidden bg-[#9E77ED1F] shadow-[4px_0_16px_2px_rgba(0,0,0,0.03)]">
          <SiderPanel />
        </div>
        <section>
          <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-5xl font-bold">Welcome</h1>
                <p className="py-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                  minima laboriosam maxime sed dignissimos harum provident itaque
                  fugiat. A repellat aliquid inventore dolor tempora, omnis
                  perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                  esse necessitatibus doloremque repudiandae!
                </p>
                <button className="btn-primary btn">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Home;
