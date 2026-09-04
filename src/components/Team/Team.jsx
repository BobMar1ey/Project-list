import "./Team.css";
import one from "../../images/Team/1.png";
import two from "../../images/Team/2.png";
import three from "../../images/Team/3.png";
import four from "../../images/Team/4.png";
import rectangle from "../../images/Team/Rectangle.svg";
import plane from "../../images/Team/plane.png";

export default function Team() {
  const list = [
    { img: one, title: "UI & UX Design" },
    { img: two, title: "UI & UX Design" },
    { img: three, title: "UI & UX Design" },
    { img: four, title: "UI & UX Design" },
  ];

  return (
    <section className="team w-full py-12 md:py-25 bg-[#171719]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="max-w-[426px] mb-12">
          <h3 className="font-bold uppercase text-[clamp(11px,1.5vw,14px)] text-gray-400 tracking-[clamp(1px,0.1vw,2px)]">
            teams
          </h3>
          <h2 className="mb-[0.4em] text-[#fff] text-[clamp(20px,2vw,32px)] font-bold mt-1">
            My <span className="text-[#194BFD]">team members</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            quidem reprehenderit molestiae veniam? Inventore.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[clamp(30px,3vw,60px)] mb-[87px]">
          {list.map((i, index) => {
            return (
              <div
                key={index}
                className="   rounded-[12px] max-w-[241px]   w-full flex flex-col items-center  flex-wrap hover:bg-[#111111]/40 hover:duration-500"
              >
                <div className="team__img-box h-[215px] w-[229px] overflow-hidden rounded-[16px] mb-5 relative ">
                  <img
                    src={i.img}
                    alt={i.title}
                    className="w-full h-full object-cover z-30 absolute"
                  />
                  <img
                    className="w-full h-full  z-10 bottom-[-30px] absolute"
                    src={rectangle}
                    alt=""
                  />
                </div>
                <div className="p-[0.5em] text-start">
                  <h3 className="text-white text-[clamp(12px,1.2vw,18px)]  mb-2">
                    {i.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="team__contact flex flex-wrap max-w-[1138px] w-full justify-center lg:justify-between items-center px-[clamp(5px,4vw,54px)] py-[clamp(5px,2vw,42px)]">
          <div className="flex items-center gap-[clamp(10px,0.9vw,16px)] max-w-[454px]">
            <img className="w-[clamp(40px,5vw,85px)] h-[clamp(40px,5vw,85px)]" src={plane} alt="" />
            <div className="text-start">
              <h2 className="text-[clamp(20px,2vw,32px)] text-white font-bold mb-[0.1em]">
                Have any project idea?
              </h2>
              <p className="text-[clamp(12px,1vw,14px)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                fugit pariatur aliquid porro blanditiis deleniti!
              </p>
            </div>
          </div>
          <a
            className="header__button  text-[14px] flex justify-center items-center leading-[40px] px-[clamp(5px,0.5,10px)] min-w-[215px] border border-[rgba(25,75,253,1)] rounded-[29px] transition-all duration-[600ms] ease-in-out "
            href="#"
          >
            Contact now
          </a>
        </div>
      </div>
    </section>
  );
}
