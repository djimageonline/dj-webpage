import Carousel from "react-elastic-carousel";
import "./carousel.css";

export default function CarouselHero() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <div className="carousel-container">
      <Carousel breakPoints={breakPoints} className="carousel">
        <div className="item img1"></div>
        <div className="item img2"></div>
        <div className="item img3"></div>
        <div className="item img4"></div>
        <div className="item img5"></div>
        <div className="item img6"></div>
        <div className="item img7"></div>
        <div className="item img8"></div>
      </Carousel>
    </div>
  );
}
