import React, { useState } from "react";
import "./Hero.css";
import img from "../../images/Hero/arrow.svg";
import Star from "../../images/Hero/star.png";
import PinkRound from "../../images/Hero/pinkRound.png";
import Round from "../../images/Hero/round.png";
export default function Hero() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <section className="Hero flex pt-[77px] relative justify-center w-full">
      <div className="container max-w-[1160px] ">
        <img
          src={Star}
          alt="star"
          className="absolute right-[55px] top-[130px]"
        />

        <img
          src={Round}
          alt="star"
          className="absolute right-[38%] top-[10%]"
        />
        <div className="text-start max-w-[600px] pt-[76px] pl-[20px] md:pl-[92px] pb-[100px] relative">
          <img
            src={PinkRound}
            alt="star"
            className="absolute bottom-[100px] right-[-40px]"
          />
          <h1 className="text-[59px] font-light tracking-[3px] leading-[67px] mb-[28px]">
            This is your front end developer{" "}
            <span className="text-[#194BFD] font-extrabold">Albert Braun</span>
          </h1>

          <p className="]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            delectus, officiis voluptate suscipit officia molestias consectetur
            tempore eum dolore et.
          </p>
          <div className="flex items-center gap-[24px] pt-[53px]">
            <button
              onClick={() => setOpen(() => !open)}
              className=" cursor-pointer hero__button  text-[14px] flex justify-center items-center leading-[40px] px-[clamp(5px,0.5,10px)] min-w-[164px] border border-[rgba(25,75,253,1)] rounded-[29px] transition-all duration-[600ms] ease-in-out "
              href=""
            >
              Discuss for Projects
            </button>
            <a href="" className="arrow__button hover:text-[#fff] duration-700">
              View Portfolios
            </a>
            {open && (
              <div
                onClick={() => setOpen(!open)}
                className=" top-0 left-0 z-40 fixed min-h-screen bg-opacity-50 bg-black w-full flex items-center justify-center"
              >
                
                <form
  action=""
  onClick={(e) => e.stopPropagation()}
  /* ИСПРАВЛЕНО: Заменили w-200 h-200 на адаптивный max-w и убрали жесткую высоту */
  className="bg-[#171719] border border-white/10 w-full max-w-[550px] rounded-[16px] flex flex-col p-[30px] shadow-2xl relative"
>
  {/* ИСПРАВЛЕНО: Добавлен цвет текста и отступ снизу */}
  <h2 className="text-white text-2xl font-bold mb-6 text-center">
    Discuss your project
  </h2>

  <div className="flex flex-col w-full gap-4">
    {/* Поле: Имя */}
    <div className="flex flex-col gap-1.5">
      {/* ИСПРАВЛЕНО: Семантический label вместо span */}
      <label htmlFor="hero-name" className="text-gray-300 text-sm font-medium">
        Your name
      </label>
      <input
        id="hero-name"
        className="border border-white/10 rounded-[8px] bg-[#111216] text-white p-3 text-sm focus:outline-none focus:border-[#194BFD] transition-colors"
        type="text"
        name="name"
        placeholder="Enter your name..."
        autoComplete="off"
      />
    </div>

    {/* Поле: Email */}
    <div className="flex flex-col gap-1.5">
      <label htmlFor="hero-email" className="text-gray-300 text-sm font-medium">
        Your email
      </label>
      <input
        id="hero-email"
        className="border border-white/10 rounded-[8px] bg-[#111216] text-white p-3 text-sm focus:outline-none focus:border-[#194BFD] transition-colors"
        type="email"
        name="email"
        required
        placeholder="Enter your email..."
        autoComplete="off"
      />
    </div>

    {/* Поле: Номер телефона */}
    <div className="flex flex-col gap-1.5">
      <label htmlFor="hero-phone" className="text-gray-300 text-sm font-medium">
        Your number
      </label>
      <input
        id="hero-phone"
        className="border border-white/10 rounded-[8px] bg-[#111216] text-white p-3 text-sm focus:outline-none focus:border-[#194BFD] transition-colors"
        type="tel"
        name="number"
        required
        placeholder="Enter your number..."
        autoComplete="off"
      />
    </div>

    {/* Поле: Детали проекта */}
    <div className="flex flex-col gap-1.5">
      <label htmlFor="hero-details" className="text-gray-300 text-sm font-medium">
        Project Details
      </label>
      {/* ИСПРАВЛЕНО: Стилизован textarea */}
      <textarea 
        id="hero-details"
        name="details"
        rows={3}
        placeholder="Enter project details..."
        className="border border-white/10 rounded-[8px] bg-[#111216] text-white p-3 text-sm focus:outline-none focus:border-[#194BFD] transition-colors resize-none"
      />
    </div>

    {/* Кнопка отправки */}
    <div className="flex justify-center mt-2">
      {/* ИСПРАВЛЕНО: Убрана опечатка в clamp (0.5vw) */}
      <button 
        className="cursor-pointer hero__button text-[14px] flex justify-center items-center leading-[40px] px-[clamp(5px,0.5vw,10px)] w-[164px] border border-[rgba(25,75,253,1)] rounded-[29px] transition-all duration-[600ms] ease-in-out text-white font-medium" 
        type="submit"
      >
        Send Request
      </button>
    </div>
  </div>
</form>
              </div>
            )}
          </div>
        </div>
        <div className="absolute right-[85px] top-[70%] md:top-[50%]">
          <div class="circle-wrapper">
            <svg class="rotating-svg" viewBox="0 0 134 134">
              <defs>
                <linearGradient
                  id="purpleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#4f46e5" />
                  <stop offset="100%" stop-color="#d946ef" />
                </linearGradient>

                <path
                  id="textPath"
                  d="M 67, 67 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>

              <circle
                cx="67"
                cy="67"
                r="65"
                stroke="url(#purpleGrad)"
                stroke-width="1.5"
                fill="none"
              />

              <text className="curved-text">
                <textPath href="#textPath" startOffset="0%">
                  100% Skilled in WebDev •
                </textPath>
              </text>
            </svg>
            <svg class="center-star" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
