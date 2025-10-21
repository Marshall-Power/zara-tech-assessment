import {
  SectionOne,
  FullScreenImageSection,
  SectionTwo,
  SectionThree,
  CarouselSection,
  GridSection,
} from "/src/components/ui/";
import { sliderParagraph } from "./assets/constants/strings";
import { carouselImages1 } from "./assets/img/carousel01";
import { carouselImages2 } from "./assets/img/carousel02";
import { gridImages } from "./assets/img/grid";

function App() {

  return (
    <>
      <SectionOne />
      <FullScreenImageSection />
      <SectionTwo />
      <CarouselSection slides={carouselImages1} />
      <SectionThree />
      <CarouselSection slides={carouselImages2} paragraph={sliderParagraph} />
      <GridSection title="Shop the collection" images={gridImages} />
    </>
  );
}

export default App;
