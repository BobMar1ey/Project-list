import Arrow from "../../images/Work/Arrow.png";
import React, { useEffect, useState } from "react";
import "./Work.css";
export default function Work() {
  let [isTablet, setTablet] = useState(window.innerWidth < 1023);
  useEffect(() => {
    const handleresize = () => {
      setTablet(window.innerWidth < 1023);
    };
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <section className="Work w-full pr-[30px] pl-[30px] flex flex-col items-center">
      <div className="container  flex flex-col items-center  max-w-[1100px]">
        <div className="flex flex-col items-center mb-[40px]">
          <h3 className="uppercase mb-[10px] text-[14px]">about me</h3>
          <h2 className="mb-[6px] text-[32px]">
            My <span className="text-[#194BFD]">work process</span>
          </h2>
          <p className="max-w-[426px] mb-[64px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            nostrum cum doloribus incidunt, aliquid pariatur?
          </p>
        </div>
        <div className="flex  w-[clamp(250px,32vw,350px)]  h-[clamp(700px,60vw,1100px)] lg:h-[350px] lg:w-full">
          <div className="flex  lg:items-stretch   justify-between flex-col lg:flex-row w-full">
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40 flex items-center justify-center relative rotate-[-45deg]">
              <div className=" w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)] rounded-[12px] border-[1px] border-solid border-white/60 flex items-center justify-center">
                <span className=" rotate-[45deg] text-[clamp(12px,2vw,18px)]">Empathize</span>
              </div>
              <img
                className={ 
                  isTablet
                    ? "absolute rotate-[45deg]  bottom-[clamp(-45px,-8vw,-65px)]"
                    : "absolute rotate-[45deg]  bottom-[-45px]"
                }
                src={Arrow}
                alt="arrow"
              />
            </div>
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40 ] flex items-center justify-center relative rotate-[-45deg]">
              <div className=" w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)]  rounded-[12px] border-[1px] border-solid border-white/60  flex items-center justify-center">
                <span className="rotate-[45deg] text-[clamp(12px,2vw,18px)]">Define</span>
              </div>
              <img
                className={
                  isTablet
                    ? "absolute left-[clamp(-45px,-8vw,-65px)] rotate-[135deg] "
                    : "absolute rotate-[-45deg]  right-[-45px]"
                }
                src={Arrow}
                alt=""
              />
            </div>
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40  flex items-center justify-center relative rotate-[-45deg]">
              <div className=" w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)]  rounded-[12px] border-[1px] border-solid border-white/60 flex items-center justify-center">
                <span className="rotate-[45deg] text-[clamp(12px,2vw,18px)]">Ideate</span>
              </div>
              <img
                className={
                  isTablet
                    ? "absolute rotate-[45deg]  bottom-[clamp(-45px,-8vw,-65px)]"
                    : "absolute rotate-[45deg]  bottom-[-45px]"
                }
                src={Arrow}
                alt=""
              />
            </div>
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40  flex items-center justify-center relative rotate-[-45deg]">
              <div className=" w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)]  rounded-[12px] border-[1px] border-solid border-white/60 flex items-center justify-center">
                <span className="rotate-[45deg] text-[clamp(12px,2vw,18px)]">Prototype</span>
              </div>
              <img
                className={
                  isTablet
                    ? "absolute left-[clamp(-45px,-8vw,-65px)] rotate-[135deg]"
                    : "absolute rotate-[-45deg]  right-[-50px]"
                }
                src={Arrow}
                alt=""
              />
            </div>
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40  flex items-center justify-center relative  rotate-[-45deg]">
              <div className=" w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)]  rounded-[12px] border-[1px] border-solid border-white/60  flex items-center justify-center">
                <span className="rotate-[45deg] text-[clamp(12px,2vw,18px)]">Qualitative test</span>
              </div>
              <img
                className={
                  isTablet
                    ? "absolute rotate-[45deg]  bottom-[clamp(-45px,-8vw,-65px)]"
                    : "absolute rotate-[45deg]  bottom-[-45px]"
                }
                src={Arrow}
                alt=""
              />
            </div>
            <div className="work__item w-[clamp(100px,15vw,184px)] h-[clamp(100px,15vw,184px)] rounded-[12px] border-[1px] border-dashed border-white/40  flex items-center justify-center relative rotate-[-45deg]">
              <div className="  w-[clamp(80px,12vw,145px)] h-[clamp(80px,12vw,145px)] rounded-[12px] border-[1px] border-solid border-white/60  flex items-center justify-center">
                <span className="rotate-[45deg] text-[clamp(12px,2vw,18px)]">Quantitative test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
