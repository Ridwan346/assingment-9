import Slider from "react-slick";

import free from "../assets/Screenshot 2026-01-19 213916.png";
import call from "../assets/Screenshot 2026-01-19 213823.png";
import clash from "../assets/Screenshot 2026-01-19 213837.png";

const BannerSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>

        {/* Slide 1 */}
        <div className="relative h-[220px] md:h-[450px]">
          <img src={free} className=" w-7xl  object-cover" />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="text-white ml-10">
              <h1 className="text-4xl font-bold">Free Fire</h1>
              <p className="mt-2">Fast-paced Battle Royale</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[250px] md:h-[450px]">
          <img src={call} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="text-white ml-10">
              <h1 className="text-4xl font-bold">Call of Duty</h1>
              <p className="mt-2">Top FPS Action Game</p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[250px] md:h-[450px]">
          <img src={clash} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="text-white ml-10">
              <h1 className="text-4xl font-bold">Clash of Clans</h1>
              <p className="mt-2">Strategy & Base Building</p>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default BannerSlider;
