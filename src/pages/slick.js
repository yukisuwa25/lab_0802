import React from "react";
import Slider from "react-slick";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKja0lwgwMMD7S9fEjyfgffmqbkkc8A5md7h4MKxrAIVxnyK7jWgbVE-PR7PvWtzemWLg&usqp=CAU";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img} />
      </div>
      <div>
        <h3>いいいいいい</h3>
      </div>
      <div>
        <h3>うううううう</h3>
      </div>
      <div>
        <h3>ええええええ</h3>
      </div>
      <div>
        <h3>おおおおおお</h3>
      </div>
      <div>
        <h3>かかかかかかか</h3>
      </div>
    </Slider>
  );
}
