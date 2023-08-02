import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKja0lwgwMMD7S9fEjyfgffmqbkkc8A5md7h4MKxrAIVxnyK7jWgbVE-PR7PvWtzemWLg&usqp=CAU";
const img2 =
  "https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg";
const img3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKGbz1FaWiUku2Zhlha3SCcoZQW-K78TPdO8rYCYjTSJlwmEdjQ-OPMU1_ZiCLEv7ElU&usqp=CAU";
const img4 =
  "https://200lab-blog.imgix.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png";
const img5 =
  "https://www.kagoya.jp/howto/wp-content/uploads/202205g_catch-1.png";

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
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
    </Slider>
  );
}
