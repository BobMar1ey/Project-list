import React from "react";
import One from "../../images/Special/1.png";
import Two from "../../images/Special/2.png";
import Three from "../../images/Special/3.png";
import "./Special.css";
export default function Special() {
  let arr = [
    { name: "Email marketing", img: One },
    { name: "Market analysis", img: Two },
    { name: "Keyword research", img: Three },
  ];
  return (
    <section className="special flex flex-col items-center  pt-[40px]  md:pt-[100px] pb-[50px] ">
      <div className="max-w-[510px] mb-[62px]">
        <h3 className="uppercase  mb-[5px] tracking-[2px]">speciality</h3>
        <h2 className="mb-[6px] text-[32px]">
          My
          <span className="text-[#194BFD] tracking-[3px]"> specialities</span>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          earum illum eaque voluptatum deserunt fugiat?
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[10px]">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className="items-center flex flex-col text-center max-w-[369px] bg-[#111111]/40 backdrop-blur-sm pt-[30px]  p-8 rounded-2xl "
            >
              <div className="special__img mb-[10px]">
                <img className=" w-[48px] h-[48px]" src={item.img} alt="" />
              </div>

              <h2 className="mb-[16px] pb-[16px] text-[18px] relative before:content-[''] before:w-[30px] before:bg-[#194BFD] before:h-[2px] before:absolute before:bottom-0 before:right-[40%] break-before-all after:content-[''] after:bg-[#16171d] after:w-[4px] after:h-[2px] after:absolute after:bottom-0 after:right-[45%]">
                {item.name}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, veniam facere praesentium voluptas obcaecati
                unde.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
