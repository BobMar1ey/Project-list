import "./Services.css";
import One from "../../images/Services/one.svg";
import Two from "../../images/Services/two.svg";
import Three from "../../images/Services/three.svg";
import Four from "../../images/Services/four.svg";
import Five from "../../images/Services/five.svg";
import Six from "../../images/Services/six.svg";

const SERVICES = [
  { title: "Digital branding", img: One },
  { title: "Creative solutions", img: Two },
  { title: "Marketing solutions", img: Three },
  { title: "Business analytics", img: Four },
  { title: "UI & UX Design", img: Five },
  { title: "Photography", img: Six },
];

export default function Services() {
  return (
    <section className="Services flex w-full flex-col items-center px-5 pt-[60px] pb-[50px] sm:px-8 md:pt-[100px] lg:pt-[120px]">
      <div className="container flex w-full max-w-[1160px] flex-col items-center">
        <div className="mb-[40px] max-w-[510px] text-center md:mb-[72px]">
          <h3 className="mb-[6px] text-[14px] uppercase tracking-[2px]">
            Services
          </h3>
          <h2 className="mb-[10px] text-[clamp(28px,4vw,32px)] tracking-[1px] text-white">
            My <span className="text-[#194BFD]">other services</span>
          </h2>
          <p className="mx-auto max-w-[426px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi
            numquam illum voluptatum sint sequi.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((item) => (
            <article key={item.title} className="services__item">
              <div className="services__icon">
                <img src={item.img} alt="" />
              </div>

              <h3 className="services__title">{item.title}</h3>

              <p className="services__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni.
              </p>

              <a href="#" className="services__cta">
                <span>Discuss for Projects</span>
                <svg
                  className="services__cta-arrow"
                  viewBox="0 0 18 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h16M12.5 1.5 16.5 5l-4 3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
