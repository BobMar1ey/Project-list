import { useEffect, useState } from "react";
import "./Hero.css";
import arrowIcon from "../../images/Hero/arrow.svg";
import avatar from "../../images/Hero/avatar.png";
import Star from "../../images/Hero/star.png";
import PinkRound from "../../images/Hero/pinkRound.png";
import Round from "../../images/Hero/round.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpenDiscuss = () => setOpen(true);
    window.addEventListener("open-discuss", onOpenDiscuss);
    return () => window.removeEventListener("open-discuss", onOpenDiscuss);
  }, []);

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
    <section
      id="home"
      className="Hero relative w-full scroll-mt-[108px] overflow-hidden px-[20px] py-[48px] md:pb-[80px]"
    >
      <div className="relative z-10 mx-auto grid max-w-[1160px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,460px)]">
        <div className="max-w-[620px] text-center lg:text-start">
          <h1 className="mb-[22px] text-[clamp(36px,5.4vw,62px)] font-light leading-[1.08] tracking-[1px] text-white">
            This is your
            <span className="block">front-end developer</span>
            <span className="hero__name block font-extrabold">Albert Braun</span>
          </h1>

          <p className="mx-auto max-w-[470px] text-[16px] leading-7 text-white/70 lg:mx-0">
            I design and build fast, accessible interfaces — from landing pages
            to product UI. Let&apos;s turn your idea into a polished website.
          </p>

          <div className="mt-[40px] flex flex-wrap items-center justify-center gap-[22px] lg:justify-start">
            <button
              type="button"
              className="hero__button min-w-[180px] cursor-pointer rounded-[29px] border border-[#194BFD] px-[22px] text-[14px] font-semibold leading-[44px] text-white transition-all duration-500"
              onClick={() => setOpen(true)}
            >
              Discuss for Projects
            </button>
            <a
              href="#portfolios"
              className="hero__link inline-flex items-center gap-[10px] text-[14px] text-white"
            >
              View Portfolios
              <img src={arrowIcon} alt="" className="h-[13px] w-[28px]" />
            </a>
          </div>
        </div>

        <div className="relative order-[-1] flex min-h-[380px] items-end justify-center lg:order-none lg:min-h-[460px]">
          <img
            src={Star}
            alt=""
            className="hero__spark pointer-events-none absolute top-[36px] right-[24px] z-20"
          />
          <img
            src={Round}
            alt=""
            className="hero__spark pointer-events-none absolute top-[18%] left-[8%] z-20"
          />
          <img
            src={PinkRound}
            alt=""
            className="pointer-events-none absolute bottom-[28%] left-0 z-20"
          />

          <div className="hero__glow absolute bottom-[40px] h-[340px] w-[340px] rounded-full" />
          <img
            src={avatar}
            alt="Albert Braun"
            className="hero__avatar relative z-10 w-full max-w-[420px] object-contain"
          />

          <div className="circle-wrapper absolute right-2 bottom-[18%] z-30 h-[134px] w-[134px]">
            <svg className="rotating-svg h-full w-full" viewBox="0 0 134 134">
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
            <svg
              className="center-star pointer-events-none absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 24 24"
              fill="none"
            >
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
            className="hero__modal relative flex w-full max-w-[480px] flex-col gap-[14px] rounded-[18px] border border-white/10 bg-[#171719] px-7 py-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <button
              type="button"
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[22px] leading-none text-white/60 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2 className="mb-2 text-center text-2xl font-bold text-white">
              Discuss your project
            </h2>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your name
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your name..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your email
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Your number
              <input
                className="rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                type="tel"
                name="number"
                placeholder="Enter your number..."
                required
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left text-[13px] font-medium text-gray-300">
              Project details
              <textarea
                className="resize-none rounded-[8px] border border-white/10 bg-[#111216] p-3 text-sm text-white focus:border-[#194BFD] focus:outline-none"
                name="details"
                rows={3}
                placeholder="Enter project details..."
              />
            </label>
            <button
              className="hero__button mt-2 min-w-[180px] self-center cursor-pointer rounded-[29px] border border-[#194BFD] px-[22px] text-[14px] font-semibold leading-[44px] text-white transition-all duration-500"
              type="submit"
            >
              Send Request
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
