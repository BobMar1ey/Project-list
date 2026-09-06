import "./Team.css";
import Reveal from "../Reveal/Reveal";
import one from "../../images/Team/1.png";
import two from "../../images/Team/2.png";
import three from "../../images/Team/3.png";
import four from "../../images/Team/4.png";
import rectangle from "../../images/Team/Rectangle.svg";
import plane from "../../images/Team/plane.png";
import contactBg from "../../images/Team/bg.webp";

const MEMBERS = [
  { img: one, title: "Frontend Developer" },
  { img: two, title: "Frontend Developer" },
  { img: three, title: "Frontend Developer" },
  { img: four, title: "Frontend Developer" },
];

export default function Team() {
  return (
    <section className="relative isolate z-0 flex w-full flex-col items-center bg-[#171719] px-5 py-12 sm:px-8 md:py-[100px]">
      <div className="flex w-full max-w-[1160px] flex-col items-center">
        <Reveal className="mb-10 max-w-[510px] text-center md:mb-16">
          <h3 className="mb-[6px] text-[14px] uppercase tracking-[2px]">
            teams
          </h3>
          <h2 className="mb-[10px] text-[clamp(28px,4vw,32px)] tracking-[1px] text-white">
            My <span className="text-[#194BFD]">team members</span>
          </h2>
          <p className="mx-auto max-w-[426px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            quidem reprehenderit molestiae veniam? Inventore.
          </p>
        </Reveal>

        <div className="mb-12 grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:mb-[72px] lg:grid-cols-4 lg:gap-6">
          {MEMBERS.map((member, index) => (
            <Reveal
              as="article"
              key={member.img}
              delay={index * 120}
              className="group flex w-full max-w-[300px] flex-col rounded-xl p-2 transition-colors duration-500 hover:bg-[#111111]/40 sm:max-w-[241px]"
            >
              <div className="relative isolate mb-5 h-[215px] w-full">
                <img
                  src={rectangle}
                  alt=""
                  className="pointer-events-none absolute inset-x-0 bottom-[-22px] z-0 w-full"
                />
                <img
                  src={member.img}
                  alt={member.title}
                  className="relative z-[1] h-full w-full rounded-2xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-1 pt-1 text-start">
                <h3 className="mb-2 text-[18px] text-white">{member.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          variant="scale"
          className="flex min-h-[171px] w-full max-w-[1138px] flex-col items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat px-5 py-6 sm:flex-row sm:px-8 md:px-[54px] md:py-10"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="flex w-full max-w-[454px] items-center gap-3 text-center sm:gap-4 sm:text-start">
            <img
              src={plane}
              alt=""
              className="size-[clamp(48px,8vw,85px)] shrink-0"
            />
            <div className="min-w-0 text-start">
              <h2 className="mb-1 text-[clamp(20px,2.4vw,32px)] font-bold text-white">
                Have any project idea?
              </h2>
              <p className="text-[clamp(12px,1.4vw,14px)] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                fugit pariatur aliquid porro blanditiis deleniti!
              </p>
            </div>
          </div>
          <a
            className="team__button flex min-h-[40px] w-full min-w-[180px] shrink-0 items-center justify-center rounded-full border border-[#194BFD] px-6 text-[14px] text-white transition-all duration-500 sm:w-auto sm:min-w-[215px]"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              window.dispatchEvent(new CustomEvent("open-discuss"));
            }}
          >
            Contact now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
