import "./Header.css";
import { useEffect, useState } from "react";
import Logo from "../../images/Header/logo.svg";
import Youtube from "../../images/Header/youtube.png";
import Telegram from "../../images/Header/telegram.png";
import Instagram from "../../images/Header/instagram.png";
import Facebook from "../../images/Header/facebook.png";
export default function Header() {
  let [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  let [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleresize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <header className="relative z-20 flex h-[108px] w-full max-w-[1160px] flex-col justify-between bg-[#171719] px-[10px]">
      {isMobile ? null : (
        <div className="flex justify-between h-full items-center">
          <div className="flex gap-3">
            <a
              className=" flex items-center justify-center w-[28px] h-[28px] bg-[rgba(230,230,230,0.1)] rounded-[50%]"
              href=""
            >
              <img src={Instagram} alt="" />
            </a>
            <a
              className=" flex items-center justify-center w-[28px] h-[28px] bg-[rgba(230,230,230,0.1)] rounded-[50%]"
              href=""
            >
              <img src={Facebook} alt="" />
            </a>
            <a
              className=" flex items-center justify-center w-[28px] h-[28px] bg-[rgba(230,230,230,0.1)] rounded-[50%]"
              href=""
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              className=" flex items-center justify-center w-[28px] h-[28px] bg-[rgba(230,230,230,0.1)] rounded-[50%]"
              href=""
            >
              <img src={Youtube} alt="" />
            </a>
          </div>
          <div className="text-sm flex gap-[45px] pr-[60px]">
            <a className="header__before" href="">
              +658436361
            </a>
            <a className="header__before" href="">
              gladium1992@gmail.com
            </a>
            <a className="header__before" href="">
              Alicante
            </a>
          </div>
        </div>
      )}

      <div className="flex justify-between h-[68px] items-center">
        <div className="flex gap-[8px]">
          <img className="h-[24px] w-[24px]" src={Logo} alt="" />
          <span>designer</span>
        </div>
        <nav
          className={`flex md:max-w-[483px] w-full ${burger ? "active" : ""} navbar`}
        >
          <ul className="text-sm flex  w-full justify-between pl-[5px]">
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out tracking-[0.1px]"
                href=""
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out"
                href=""
              >
                Service
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out"
                href=""
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out"
                href=""
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out"
                href=""
              >
                Client
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#E6E6E6] duration-600 ease-in-out"
                href=""
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          className="header__button  text-[14px] flex justify-center items-center leading-[40px] px-[clamp(5px,0.5,10px)] min-w-[164px] border border-[rgba(25,75,253,1)] rounded-[29px] transition-all duration-[600ms] ease-in-out "
          href="#"
        >
          Discuss for Projects
        </a>
        {isMobile && (
          <div
            className={`header__burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(!burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </header>
  );
}
