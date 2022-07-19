import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/ava-1.jpg";
import image2 from "../../assets/images/ava-2.jpg";
import image3 from "../../assets/images/ava-3.jpg";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <p className="my-3">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis tempora aperiam quibusdam molestias quisquam, suscipit
            iure, nam in minima nihil nisi debitis labore architecto cupiditate
            at harum ex accusantium voluptas!"
          </p>
          <div className="d-flex align-items-center">
            <img src={image1} alt="" width={50} />
            <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
              Jhon Doe
            </span>
          </div>
        </div>
        <div>
          <p className="my-3">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis tempora aperiam quibusdam molestias quisquam, suscipit
            iure, nam in minima nihil nisi debitis labore architecto cupiditate
            at harum ex accusantium voluptas!"
          </p>
          <div className="d-flex align-items-center">
            <img src={image2} alt="" width={50} />
            <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
              Mitchell Marsh
            </span>
          </div>
        </div>
        <div>
          <p className="my-3">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis tempora aperiam quibusdam molestias quisquam, suscipit
            iure, nam in minima nihil nisi debitis labore architecto cupiditate
            at harum ex accusantium voluptas!"
          </p>
          <div className="d-flex align-items-center">
            <img src={image3} alt="" width={50} />
            <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
              Steven Crock
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
