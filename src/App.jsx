import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Special from "./components/Special/Special";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Swipe from "./components/Swipe/Swipe.jsx";
import Recommend from "./components/Recommend/Recommend.jsx";
import Team from "./components/Team/Team.jsx";
import Footer from "./components/Footer/Footer.jsx";

import webShopImg from "./assets/previews/web-shop.png";
import fashionImg from "./assets/previews/fashion.png";
import bigPageImg from "./assets/previews/big-page.png";
import newTryImg from "./assets/previews/new-try.png";
import firstProjectImg from "./assets/previews/first-project.png";
import thirdProjectImg from "./assets/previews/third-project.png";

const PAGES = "https://albert-braun.github.io";

const PROJECTS = [
  {
    title: "Web Shop",
    url: `${PAGES}/Web-shop/`,
    img: webShopImg,
  },
  {
    title: "FASCO Store",
    url: `${PAGES}/Online-clothing-store/`,
    img: fashionImg,
  },
  {
    title: "Arik Portfolio",
    url: `${PAGES}/big-page/`,
    img: bigPageImg,
  },
  {
    title: "Fapster Kit",
    url: `${PAGES}/new-try/`,
    img: newTryImg,
  },
  {
    title: "Wishbone Partners",
    url: `${PAGES}/first-project/`,
    img: firstProjectImg,
  },
  {
    title: "Aperture Studios",
    url: `${PAGES}/third-project/`,
    img: thirdProjectImg,
  },
];

function App() {
  const arrProjects = Array.from({ length: 18 }, (_, index) => PROJECTS[index % PROJECTS.length]);

  return (
    <>
      <Header />
      <Hero />
      <Special />
      <Work />
      <Services />
      <Swipe arrProjects={arrProjects} />
      <Recommend />
      <Team />
      <Footer />
    </>
  );
}

export default App;
