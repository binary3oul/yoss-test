import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import MyAccount from "../MyAccount"

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100 flex-col sm:flex-row">
          <div>
          <Logo />
          <Menu
            links={[
              { name: "Home", href: "/", "current": true },
              { name: "My visits", href: "/my-visits", "current": false },
              { name: "My favourites", href: "/my-favourites", "current": false },
            ]}
          />
          </div>
          <div className="navbar-end gap-1">
            <button className="btn-ghost btn-circle btn">
              <div className="indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="badge badge-primary badge-xs indicator-item">1</span>
              </div>
            </button>
            <button className="btn-ghost btn-circle btn">
              <div className="indicator">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.79514 17.5C8.38275 18.0186 9.15462 18.3333 10 18.3333C10.8454 18.3333 11.6172 18.0186 12.2048 17.5M15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5978 2.19344 11.3261 1.66666 10 1.66666C8.67391 1.66666 7.40214 2.19344 6.46446 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 9.24181 4.35039 11.005 3.62472 12.1712C3.0126 13.1549 2.70654 13.6467 2.71777 13.784C2.73019 13.9359 2.76238 13.9938 2.88481 14.0846C2.99538 14.1667 3.49382 14.1667 4.49071 14.1667H15.5093C16.5062 14.1667 17.0046 14.1667 17.1152 14.0846C17.2376 13.9938 17.2698 13.9359 17.2822 13.784C17.2934 13.6467 16.9874 13.1549 16.3753 12.1712C15.6496 11.005 15 9.24181 15 6.66666Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="badge badge-primary badge-xs indicator-item">1</span>
              </div>
            </button>
            <MyAccount info={
              { photo: "/photo/my.png", name: "Client Rhye", email: "test@caredirect.com" }
            } />
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
