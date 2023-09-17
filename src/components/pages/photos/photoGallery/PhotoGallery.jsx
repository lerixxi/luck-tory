import Slider from "react-slick";
import Image from "next/image";
import { NextArrow } from "@/components/common/arrowsSlick/NextArrow";
import { PrevArrow } from "@/components/common/arrowsSlick/PrevArrow";
import { photos } from "@/data/photosPage/gallery";
import styles from "./PhotoGallery.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PhotoGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={styles.section}>
      <div className={`container`}>
        <ul>
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <li key={index}>
                <Image
                  className={styles.image}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="80vw"
                />
              </li>
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
};
