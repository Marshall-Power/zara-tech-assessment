import SectionOne from "/src/components/ui/SectionOne";
import FullScreenImageSection from "/src/components/ui/FullScreenImageSection";
import CarouselSection from "/src/components/ui/Carousel";
import SectionTwo from "/src/components/ui/SectionTwo";
import SectionThree from "/src/components/ui/SectionThree";
import GridSection from '/src/components/ui/ProductsGrid';

import img04 from "./assets/img/carousel01/img04.jpg";
import img05 from "./assets/img/carousel01/img05.jpg";
import img06 from "./assets/img/carousel01/img06.jpg";
import img07 from "./assets/img/carousel01/img07.jpg";
import img08 from "./assets/img/carousel01/img08.jpg";

import img12 from "./assets/img/carousel02/img12.jpg";
import img13 from "./assets/img/carousel02/img13.jpg";
import img14 from "./assets/img/carousel02/img14.jpg";
import img15 from "./assets/img/carousel02/img15.jpg";
import img16 from "./assets/img/carousel02/img16.jpg";

function App() {
  const slidesCarousel1 = [img04, img05, img06, img07, img08];
  const slidesCarousel2 = [img12, img13, img14, img15, img16];
  const sliderParagraph = `When Zara Origins launched its first two collections for the winter and summer seasons, 
the constantly evolving project was defined by these statements. 
After two editions that allowed for experimentation within the collection, 
the approach for the third edition has evolved naturally, 
solidifying Zara Origins as a year-long offering of wardrobe essentials.

When Zara Origins launched its first two collections for the winter and summer seasons, 
the constantly evolving project was defined by these statements. 
After two editions that allowed for experimentation within the collection, 
the approach for the third edition has evolved naturally, 
solidifying Zara Origins as a year-long offering of wardrobe essentials.
When Zara Origins launched its first two collections for the winter and summer seasons, 
the constantly evolving project was defined by these statements. 
After two editions that allowed for experimentation within.
`;

  return (
    <>
      <SectionOne />
      <FullScreenImageSection />
      <SectionTwo />
      <CarouselSection slides={slidesCarousel1} />
      <SectionThree />
      <CarouselSection slides={slidesCarousel2} paragraph={sliderParagraph} />
      <GridSection/>
    </>
  );
}

export default App;
