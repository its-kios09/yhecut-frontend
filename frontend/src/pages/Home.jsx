import LastestProducts from "../components/LastestProducts.jsx";
import BestSeller from "../components/BestSeller.jsx";
import OurClients from "../components/OurClients.jsx";
import Carousel from "../components/Carousel.jsx";

import home1 from "../assets/Home-Banner-1-1.png"; 
import home2 from "../assets/Home-Banner-2.png";
import home3 from "../assets/Home-Banner-3.png";
import home4 from "../assets/Home-Banner-4.png";
import home5 from "../assets/Home-Banner-5.png";
import home6 from "../assets/Home-Banner-6-3.png";
import InstructionCard from "../components/Instruction.jsx";

const Home = () => {
  const slides = [
    {
      image: home1,
      title: "COPORATE PRINT & BRANDING",
      description: "SOLUTIONS",
    },
    {
      image: home2,
      title: "VINYL STICKERS & LABELLING SOLUTIONS",
      description: "SOLUTIONS",
    },
    {
      image: home3,
      title: "CUSTOM APPAREL BRANDING",
      description: "SOLUTIONS",
    },
    {
      image: home4,
      title: "FOOTBALL JERSERY CUSTOMIZATION",
      description: "SOLUTIONS",
    },
    {
      image: home5,
      title: "PROMOTIONAL MERCHANDIZE",
      description: "SOLUTIONS",
    },
    {
      image: home6,
      title: "SIGNAGE INDOOR & OUTDOOR",
      description: "SOLUTIONS",
    },
  ];
  return (
    <div>
      <Carousel slides={slides} interval={5000} />
      <InstructionCard />
      {/* <Hero /> */}
      <LastestProducts />
      <BestSeller />
      <OurClients />
    </div>
  );
};

export default Home;
