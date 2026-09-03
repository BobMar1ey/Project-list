import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Special from "./components/Special/Special";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Swipe from "./components/Swipe/Swipe.jsx";
import Recommend from "./components/Recommend/Recommend.jsx";
import Team from "./components/Team/Team.jsx";

import proImg1 from "./assets/one.jpg";
import proImg2 from "./assets/two.jpg";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);
  const arrProjects = [
    { img: proImg1 },
    { img: proImg2 }, // Дублируем для теста, если картинок пока мало
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
    { img: proImg1 },
    { img: proImg2 },
  ];
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
      <Footer/>
    </>
  );
}

export default App;
