import cn from "classnames";
import Counter from "yet-another-react-lightbox/plugins/counter";
import React, { useState } from "react";
import styles from "./TourDayItem.module.scss";
import { Lightbox } from "yet-another-react-lightbox";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import Image from "next/image";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";

const TourDayItem = ({ detailsDay }) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const slides = detailsDay.images.map(({ url }) => ({ src: url }));

  return (
    <>
      <li className={cn(styles.daysItem, isShow && styles.isShowDaysInfo)}>
        <h3 onClick={() => setIsShow(!isShow)}>
          <span>{isShow ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}</span>
          {detailsDay.title}
        </h3>
        <div className={cn(styles.daysInfoBox)}>
          <div
            dangerouslySetInnerHTML={{ __html: detailsDay.desription }}
            className={styles.daysText}
          />
          <div className={styles.daysImageBox}>
            {detailsDay?.images.map((photo, idx) => (
              <Image
                className={styles.daysImage}
                key={idx}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 768px) 80vw, 30vw"
                src={photo.url}
                onClick={() => setIsShowModal(true)}
              />
            ))}
          </div>
        </div>
      </li>

      <Lightbox
        plugins={[Counter]}
        // counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        open={isShowModal}
        close={() => setIsShowModal(false)}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
};

export default TourDayItem;
