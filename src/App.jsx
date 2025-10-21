import {
  SectionOne,
  FullScreenImageSection,
  SectionTwo,
  SectionThree,
  CarouselSection,
  GridSection,
} from "/src/components/ui/";
import { sliderParagraph } from "./assets/constants/strings";
import { img04, img05, img06, img07, img08 } from "./assets/img/carousel01";
import { img12, img13, img14, img15, img16 } from "./assets/img/carousel02";

function App() {
  const slidesCarousel1 = [img04, img05, img06, img07, img08];
  const slidesCarousel2 = [img12, img13, img14, img15, img16];

  return (
    <>
      <SectionOne />
      <FullScreenImageSection />
      <SectionTwo />
      <CarouselSection slides={slidesCarousel1} />
      <SectionThree />
      <CarouselSection slides={slidesCarousel2} paragraph={sliderParagraph} />
      <GridSection title="Shop the collection" />
    </>
  );
}

export default App;
