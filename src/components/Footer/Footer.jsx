import instagram from "../../images/Footer/in.svg";
import facebook from "../../images/Footer/f.svg";
import youtube from "../../images/Footer/y.svg";
import twitter from "../../images/Footer/t.svg";
import call from "../../images/Footer/call.svg";
import send from "../../images/Footer/send.svg";
import location from "../../images/Footer/location.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer w-full flex justify-center">
      <div className="container w-full max-w-[1180px] px-[20px]">
        <div className="flex items-center justify-between  mb-[27px] flex-wrap flex-col md:flex-row gap-[20px] ">
          <div className="max-w-[289px] text-start">
            <h2 className=" pl-[30px] text-white text-[16px] font-bold footer__logo relative mb-[23px] inline-block">
              designer
            </h2>
            <p className="text-[14px] mb-[19px] leading-[20px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              accusantium quidem ipsa ab maiores vel rerum nemo est nobis qui!
              accusantium quidem ipsa
            </p>
            <div className="flex gap-[12px]">
              <a
                className="bg-[#111113] w-[30px] h-[30px] flex items-center justify-center rounded-[50%]"
                href=""
              >
                <img className="h-[12px]" src={instagram} alt="" />
              </a>
              <a
                className="bg-[#111113] w-[30px] h-[30px] flex items-center justify-center rounded-[50%]"
                href=""
              >
                <img className="" src={youtube} alt="" />
              </a>
              <a
                className="bg-[#111113] w-[30px] h-[30px] flex items-center justify-center rounded-[50%]"
                href=""
              >
                <img className="" src={twitter} alt="" />
              </a>
              <a
                className="bg-[#111113] w-[30px] h-[30px] flex items-center justify-center rounded-[50%]"
                href=""
              >
                <img className="" src={facebook} alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] text-start max-w-[250px] w-full md:w-[100px]">
            <span className="mb-[14px] font-bold text-[16px] tracking-wider text-white">
              Quick link
            </span>
            <ul className="flex flex-col text-start gap-[2px]">
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Home</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Service</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Projects</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">About</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Client</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-start gap-[5px] max-w-[250px] w-full md:w-[100px]">
            <span className="mb-[14px] font-bold text-[16px] tracking-wider text-white">
              Important
            </span>
            <ul className="flex flex-col gap-[2px]">
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Career</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Privacy Policy</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Cookies Policy</a>
              </li>
              <li className="hover:text-white duration-500 ease-in-out text-[14px] italic">
                <a href="">Social Work</a>
              </li>
            </ul>
          </div>
          <div className="text-start max-w-[250px] w-full md:w-[100px]" >
            <span className="inline-block mb-[20px] font-bold text-[16px] tracking-wider  text-white">
              Contacts
            </span>
            <ul className="flex flex-col  gap-[7px]">
              <li className="flex items-center gap-[10px]">
                <img src={call} alt="" />
                <span className="text-[14px] italic">+223 456 789</span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={send} alt="" />
                <span className="text-[14px] italic">
                  gladium1992@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <img src={location} alt="" />
                <span className="text-[14px] italic">Alicante</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[30px] text-[14px] italic tracking-[0.5px] text-center">
          <span>Copyright 2022 | All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
