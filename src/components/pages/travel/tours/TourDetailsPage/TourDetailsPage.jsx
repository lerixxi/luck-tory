import cn from "classnames";
import React, { useState } from "react";
import TourDayItem from "./TourDayItem/TourDayItem";
import styles from "./TourDetailsPage.module.scss";
import { BsCheck2, BsCheck2All, BsCheck2Circle, BsDashLg } from "react-icons/bs";
import { Hero } from "@/components/common/hero/Hero";

export const TourDetailsPage = ({ tour }) => {
  const {
    name,
    subtitle,
    desription,
    dateStart,
    dateEnd,
    price,
    status,
    photos,
    details,
    heroPhoto,
  } = tour;

  const isPlannedTour = status === "planned";

  return (
    <>
      <Hero background={heroPhoto.url} title={heroPhoto.title} description={heroPhoto.subtitle} />
      <section className={cn("container", styles.commonSection)} id="common">
        <div className={styles.nav}>
          <a href="#common">Общая информация</a>
          <a href="#days">Программа по дням</a>
          <a href="#inclusions">Что входит в стоимость</a>
          <a href="#common">Видео</a>
        </div>

        <div className={styles.commonBox}>
          <div dangerouslySetInnerHTML={{ __html: details.about }} className={styles.commonInfo} />
          <div className={styles.commonDetailsBox}>
            <p>{price}$</p>
            <p>
              Статус:{" "}
              <span style={{ color: isPlannedTour ? "#60B782" : "red" }}>
                {isPlannedTour ? "Набор открыт" : "Завершен"}
              </span>
            </p>
            <p>
              Локация: <span>{details.locations.join(", ")}</span>
            </p>
            <p>
              Дата старта: <span>{dateStart}</span>
            </p>
            <p>
              Дата окончания: <span>{dateEnd}</span>
            </p>
            <p>
              Продолжительность:
              <span>
                {Math.floor((new Date(dateEnd) - new Date(dateStart)) / (1000 * 60 * 60 * 24))} дней
              </span>
            </p>
            {isPlannedTour && <button className={styles.bookBtn}>ЗАБРОНЮВАТИ</button>}
          </div>
        </div>
      </section>

      <section className={cn(styles.daysSection)} id="days">
        <div className="container">
          <h2>ПРОГРАММА ПО ДНЯМ</h2>
          <ul className={styles.daysList}>
            {details.days.map((item, idx) => (
              <TourDayItem key={idx} detailsDay={item} />
            ))}
          </ul>
        </div>
      </section>

      <section className={cn("container", styles.inclusionsSection)} id="inclusions">
        <h2>ЧТО ВХОДИТ В СТОИМОСТЬ</h2>
        <div className={styles.inclusionsBox}>
          <div>
            <h3>Входит:</h3>
            <ul className={styles.includeList}>
              {details.inclusions.include.map((item, idx) => (
                <li key={idx}>
                  <span>
                    <BsCheck2 />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Не входит:</h3>
            <ul className={cn(styles.includeList, styles.notIncludeList)}>
              {details.inclusions.notInclude.map((item, idx) => (
                <li key={idx}>
                  <span>
                    <BsDashLg />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
