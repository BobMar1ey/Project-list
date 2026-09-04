import "./Services.css";
import One from "../../images/Services/one.svg";
import Two from "../../images/Services/two.svg";
import Three from "../../images/Services/three.svg";
import Four from "../../images/Services/four.svg";
import Five from "../../images/Services/five.svg";
import Six from "../../images/Services/six.svg";
import Arrow from "../../images/Services/arrow.png";

export default function Services() {
  let arrServices = [
    { title: "Digital branding", img: One },
    { title: "Creative solutions", img: Two },
    { title: "Marketing solutions", img: Three },
    { title: "Business analytics", img: Four },
    { title: "UI & UX Design", img: Five },
    { title: "Photography", img: Six },
  ];
  return (
    <section className="Services flex flex-col items-center pt-[140px]  w-full ">
      <div className="container max-w-[1160px] flex justify-center flex-col items-center">
        <div className="max-w-[426px]">
          <h3 className="uppercase tracking-[3px] mb-[5px] text-[18px]">
            Services
          </h3>
          <h2 className="text-[32px] tracking-[2px] mb-[10px]">
            My <span className="text-[#194BFD]">other services</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi
            numquam illum voluptatum sint sequi.
          </p>
        </div>
        <div className="flex flex-wrap justify-center pt-[100px] gap-y-[55px] gap-x-[10px]">
          {arrServices.map((item, index) => {
            return (
              <div
                key={index}
                className="relative services__item h-[260px] w-[clamp(250px,25vw,369px)] flex flex-col items-center text-center"
              >
                <div className="services__img-box  before:rounded-[18px] mb-[35px] before:bg-[#16171d] flex items-center justify-center ">
                  <img
                    className="z-30 w-[35px] h-[35px] w-full"
                    src={item.img}
                    alt=""
                  />
                </div>

                <h3
                  className="mb-[16px] pb-[16px] text-[18px] relative break-words tracking-[1.2px]
                  before:content-[''] before:w-[30px] before:bg-[#194BFD] before:h-[2px] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                  after:content-[''] after:bg-[#16171d] after:w-[4px] after:h-[2px] after:absolute after:bottom-0 after:left-[55%] after:-translate-x-1/2"
                >
                  {item.title}
                </h3>

                <p className="max-w-[clamp(200px,15vw,274px)] text-[12px] mb-[15px] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, magni.
                </p>

                <a
                  href="#"
                  className="relative z-20 block text-center cursor-pointer max-w-[177px] w-full leading-[38px] rounded-[16px] bg-[rgba(230,230,230,0.1)] transition-colors hover:bg-[rgba(230,230,230,0.2)] text-[12px] flex items-center pr-[18px] pl-[18px] justify-between"
                >
                  <span>Discuss for Projects </span>{" "}
                  <img src={Arrow} className="w-[14.4px] h-[8px]" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
