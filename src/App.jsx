import {
  SectionOne,
  FullScreenImageSection,
  SectionTwo,
  SectionThree,
  CarouselSection,
  GridSection,
} from "/src/components/ui/";
import { SLIDER_PARAGRAPH } from "./assets/constants/strings";
import { carouselImages1 } from "./assets/img/carousel01";
import { carouselImages2 } from "./assets/img/carousel02";
import { gridImages } from "./assets/img/grid";
import { img01, img02, img03, img09, img11 } from "./assets/img";

function App() {
  return (
    <>
      <SectionOne imgSrc={img01} />
      <FullScreenImageSection imgSrc={img02} />
      <SectionTwo imgSrc={img03} />
      <CarouselSection slides={carouselImages1} />
      <SectionThree leftImgSrc={img09} righImgSrc={img11} />
      <CarouselSection slides={carouselImages2} paragraph={SLIDER_PARAGRAPH} />
      <GridSection title="Shop the collection" images={gridImages} />
    </>
  );
}

export default App;
