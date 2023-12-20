import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/images/home/banner-carousel/01.jpg";
import banner2 from "../../../assets/images/home/banner-carousel/02.jpg";
import banner3 from "../../../assets/images/home/banner-carousel/03.png";
import banner4 from "../../../assets/images/home/banner-carousel/04.jpg";
import banner5 from "../../../assets/images/home/banner-carousel/05.png";
import banner6 from "../../../assets/images/home/banner-carousel/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner5} />
        </div>
        <div>
          <img src={banner6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
