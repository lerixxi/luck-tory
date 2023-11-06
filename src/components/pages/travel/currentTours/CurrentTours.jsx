import cn from "classnames";
import React from "react";
import Image from "next/image";
import { tours } from "@/data/travelPage/tours";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import styles from "./CurrentTours.module.scss";

export const CurrentTours = () => {
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
                      <p>{tour.subtitle}</p>
                      <div>
                        <p>
                          <b>Початок:</b> <span>{tour.dateStart}</span>
                        </p>
                        <p>
                          <b>Закінчення:</b> <span>{tour.dateEnd}</span>
                        </p>
                        <p>
                          <b>Вартість:</b> <span>{tour.price}$</span>
                        </p>
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
                      <p>{tour.subtitle}</p>
                      <div>
                        <p>
                          <b>Закінчився:</b> <span>{tour.dateEnd}</span>
                        </p>
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
    </>
  );
};
