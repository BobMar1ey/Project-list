import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Special from "./components/Special/Special";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Swipe from "./components/Swipe/Swipe.jsx";
import Recommend from "./components/Recommend/Recommend.jsx";
import Team from "./components/Team/Team.jsx";
import Footer from "./components/Footer/Footer.jsx";

import proImg1 from "./assets/one.jpg";
import proImg2 from "./assets/two.jpg";

function App() {
  const arrProjects = Array.from({ length: 20 }, (_, index) => ({
    img: index % 2 === 0 ? proImg1 : proImg2,
  }));

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
