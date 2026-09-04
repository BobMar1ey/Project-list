import "./Recommend.css";

import Signature from "../../images/Recommend/signature.png";
import Avatar from "../../images/Recommend/avatar.webp";

export default function Reconnend() {
  return (
    <section className="recommend max-w-[1228px] flex w-full pt-[35px] justify-center">
      <div className="container flex lg:justify-start justify-center  gap-[clamp(30px,6vw,105px)] p-[clamp(20px,5vw,70px)] flex-wrap">
        <div className="recommend__img-box relative ">
          <img src={Avatar} alt="" />
          <div className="absolute right-[-70px] bottom-[-72px] ">
            <div class="circle-wrapper">
              <svg  viewBox="0 0 134 134">
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
        <div className="recommend__text-box max-w-[600px]  flex flex-col justify-center text-start pt-[5px]  pr-[50px] relative">
          <h2 className="text-[18px] tracking-normal mb-[1.2em] font-bold text-white">
            “Service is good and I recommend”
          </h2>
          <p className="mb-[17px] text-[14px] leading-[20px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            similique magni possimus voluptatem non alias, aperiam error at
            perferendis, rem ratione ducimus, deserunt quas corrupti?
          </p>
          <p className="mb-[10px] text-[14px] leading-[20px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste earum
            dolore quae ad enim nemo sapiente dolores! Distinctio, nisi ratione? dolore quae ad enim nemo sapiente dolores! Distinctio, nisi ratione?
          </p>
          <p className="mb-[12px] text-[14px] leading-[20px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            doloribus error consequatur sint sunt esse. Nisi
            doloribus error consequatur sint sunt esse. Nisi
            doloribus error consequatur sint sunt esse.
          </p>
          <img src={Signature} alt="" className="w-[clamp(100px,12vw,160px)]" />
        </div>
      </div>
    </section>
  );
}
