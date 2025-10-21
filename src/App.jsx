import {
  SectionOne,
  FullScreenImageSection,
  SectionTwo,
  SectionThree,
  CarouselSection,
  GridSection,
} from "/src/components/ui/";
import {
  SLIDER_PARAGRAPH,
  SECTION_ONE_DESCRIPTION,
  SECTION_TWO_DESCRIPTION,
  PERMANENT_COLLECTION,
} from "./assets/constants/strings";
import { carouselImages1 } from "./assets/img/carousel01";
import { carouselImages2 } from "./assets/img/carousel02";
import { gridImages } from "./assets/img/grid";
import { img01, img02, img03, img09, img11 } from "./assets/img";

function App() {
  return (
    <>
      <SectionOne imgSrc={img01} {...SECTION_ONE_DESCRIPTION} />
      <FullScreenImageSection
        imgSrc={img02}
        description={PERMANENT_COLLECTION}
      />
      <SectionTwo imgSrc={img03} description={SECTION_TWO_DESCRIPTION} />
      <CarouselSection slides={carouselImages1} />
      <SectionThree leftImgSrc={img09} righImgSrc={img11} />
      <CarouselSection slides={carouselImages2} paragraph={SLIDER_PARAGRAPH} />
      <GridSection title="Shop the collection" images={gridImages} />
    </>
  );
}

export default App;
