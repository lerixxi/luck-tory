import Image from "next/image";
import { testimonials } from "@/data/homePage/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow } from "@/components/common/arrowsSlick/NextArrow";
import { PrevArrow } from "@/components/common/arrowsSlick/PrevArrow";
import styles from "./TestimonialGallery.module.scss";

export const TestimonialGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.box}>
      <ul className={styles.testimonialsList}>
        <Slider {...settings}>
          {testimonials.map(({ name, alt, src, width, height, text }) => (
            <li key={src} className={styles.item}>
              <Image
                alt={alt}
                src={src}
                width={width}
                height={height}
                className={styles.image}
                sizes="(max-width: 768px) 80vw, 30vw"
              />
              <p>&laquo;{text}&raquo;</p>
              <h3>{name}</h3>
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};
