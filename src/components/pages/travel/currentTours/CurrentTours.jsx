import cn from "classnames";
import React from "react";
import { NextArrow } from "@/components/common/arrowsSlick/NextArrow";
import { PrevArrow } from "@/components/common/arrowsSlick/PrevArrow";
import styles from "./CurrentTours.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import { tours } from "@/data/travelPage/tours";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const CurrentTours = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className={styles.section}>
        <div className={cn("container", styles.container)}>
          <h2>Заплановані тури</h2>
          <ul>
            {tours.map((tour) => {
              if (tour.status === "planned") {
                return (
                  <li key={tour.id}>
                    <Image
                      alt={tour.heroPhoto.alt}
                      src={tour.heroPhoto.url}
                      width={tour.heroPhoto.width}
                      height={tour.heroPhoto.height}
                      sizes="(max-width: 768px) 90vw, 40vw"
                    />
                    <div className={styles.descriptionBox}>
                      <h3>{tour.name}</h3>
                      <p className={` ${montserrat.className}`}>{tour.subtitle}</p>
                      <div>
                        <p>Початок: {tour.dateStart}</p>
                        <p>Закінчення: {tour.dateEnd}</p>
                        <p>Вартість: {tour.price}$</p>
                      </div>
                    </div>

                    <Link href={`/travel/tours/${tour.id}`}>Детальніше</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={cn("container", styles.container)}>
          <h2>Проведені тури</h2>
          <ul>
            {tours.map((tour) => {
              if (tour.status === "completed") {
                return (
                  <li key={tour.id}>
                    <Image
                      alt={tour.heroPhoto.alt}
                      src={tour.heroPhoto.url}
                      width={tour.heroPhoto.width}
                      height={tour.heroPhoto.height}
                      sizes="(max-width: 768px) 90vw, 40vw"
                    />
                    <div className={styles.descriptionBox}>
                      <h3>{tour.name}</h3>
                      <p className={` ${montserrat.className}`}>{tour.subtitle}</p>
                      <div>
                        <p>Закінчився: {tour.dateEnd}</p>
                      </div>
                    </div>

                    <Link href={`/travel/tours/${tour.id}`}>Детальніше</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </section>
      {/* <section className={styles.section}>
				<div className="container">
					<h2 className={styles.title}>Проведені тури</h2>
					<Slider {...settings}>
						{tours.map((tour) => (
							<Link
								className={styles.collection}
								key={tour.id}
								href={`/travel/${tour.id}`}
							>
								<Image
									className={styles.collectionBigImg}
									src={tour.photos[0].url}
									width={tour.photos[0].width}
									height={tour.photos[0].height}
									alt={tour.photos[0].alt}
								/>
								<div className={styles.collectionBox}>
									<Image
										className={styles.collectionMini}
										src={tour.photos[1].url}
										width={tour.photos[1].width}
										height={tour.photos[1].height}
										alt={tour.photos[1].alt}
									/>
									<Image
										className={styles.collectionMini}
										src={tour.photos[2].url}
										width={tour.photos[2].width}
										height={tour.photos[2].height}
										alt={tour.photos[2].alt}
									/>
									<Image
										className={styles.collectionMini}
										src={tour.photos[3].url}
										width={tour.photos[3].width}
										height={tour.photos[3].height}
										alt={tour.photos[3].alt}
									/>
								</div>
								<h4>
									{tour.name}
									<span>Дата: {tour.dateEnd}</span>
								</h4>
							</Link>
						))}
					</Slider>
				</div>
			</section> */}
    </>
  );
};
