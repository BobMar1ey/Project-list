import { useEffect, useState } from "react";
import "./Hero.css";
import arrowIcon from "../../images/Hero/arrow.svg";
import Star from "../../images/Hero/star.png";
import PinkRound from "../../images/Hero/pinkRound.png";
import Round from "../../images/Hero/round.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <section className="Hero relative flex w-full justify-center pt-[77px]">
      <div className="container relative max-w-[1160px] w-full">
        <img
          src={Star}
          alt=""
          className="pointer-events-none absolute right-[55px] top-[130px] hidden md:block"
        />
        <img
          src={Round}
          alt=""
          className="pointer-events-none absolute right-[38%] top-[10%] hidden md:block"
        />

        <div className="relative max-w-[600px] pb-[220px] pl-[20px] pt-[76px] text-start md:pb-[100px] md:pl-[92px]">
          <img
            src={PinkRound}
            alt=""
            className="pointer-events-none absolute bottom-[100px] right-[-40px] hidden md:block"
          />

          <h1 className="mb-[28px] text-[clamp(34px,7vw,59px)] font-light leading-[1.12] tracking-[2px] text-white">
            This is your front-end developer{" "}
            <span className="font-extrabold text-[#194BFD]">Albert Braun</span>
          </h1>

          <p className="max-w-[480px] text-[15px] leading-7 text-white/70 md:text-base">
            I design and build fast, accessible interfaces — from landing pages
            to product UI. Let&apos;s turn your idea into a polished website.
          </p>

          <div className="flex flex-wrap items-center gap-[24px] pt-[53px]">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hero__button flex min-w-[164px] cursor-pointer items-center justify-center rounded-[29px] border border-[rgba(25,75,253,1)] px-[18px] text-[14px] font-medium leading-[40px] text-white transition-all duration-[600ms] ease-in-out"
            >
              Discuss for Projects
            </button>

            <a
              href="#portfolios"
              className="arrow__button text-[14px] text-white/80 duration-700 hover:text-white"
            >
              <span>View Portfolios</span>
              <img src={arrowIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="absolute right-[20px] top-[78%] hidden sm:block md:right-[85px] md:top-[50%]">
          <div className="circle-wrapper">
            <svg className="rotating-svg" viewBox="0 0 134 134">
              <defs>
                <linearGradient
                  id="heroPurpleGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
                <path
                  id="heroTextPath"
                  d="M 67, 67 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>
              <circle
                cx="67"
                cy="67"
                r="65"
                stroke="url(#heroPurpleGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <text className="curved-text">
                <textPath href="#heroTextPath" startOffset="0%">
                  100% Skilled in WebDev •
                </textPath>
              </text>
            </svg>
            <svg className="center-star" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="hero__backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <form
            onClick={(event) => event.stopPropagation()}
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
            className="hero__modal relative flex w-full max-w-[550px] flex-col rounded-[16px] border border-white/10 bg-[#171719] p-6 shadow-2xl sm:p-[30px]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-xl text-white/60 hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Discuss your project
            </h2>

            <div className="flex w-full flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                Your name
                <input
                  className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  required
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                Your email
                <input
                  className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  required
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                Your number
                <input
                  className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                  type="tel"
                  name="number"
                  placeholder="Enter your number..."
                  required
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-300">
                Project details
                <textarea
                  name="details"
                  rows={3}
                  placeholder="Enter project details..."
                  className="resize-none rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                />
              </label>

              <div className="mt-2 flex justify-center">
                <button
                  className="hero__button flex w-[164px] cursor-pointer items-center justify-center rounded-[29px] border border-[rgba(25,75,253,1)] px-[18px] text-[14px] font-medium leading-[40px] text-white transition-all duration-[600ms] ease-in-out"
                  type="submit"
                >
                  Send Request
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
