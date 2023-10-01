import cn from "classnames";
import React from "react";
import { PhotoPreviewSection } from "@/components/common/PhotoPreviewSection/PhotoPreviewSection";
import { inspirationPhotos } from "@/data/photosPage/collectionPhoto";
import styles from "./InspirationPage.module.scss";
import { Hero } from "@/components/common/hero/Hero";

export const InspirationPage = () => {
  return (
    <>
      <Hero
        background="/images/photosPage/inspirationPage/hero.jpg"
        title="Фотографія — це мить, закарбована назавжди"
        description="У кожному кадрі живе своя історія та емоція"
      />

      <section className={styles.photoSection}>
        <PhotoPreviewSection collection={inspirationPhotos} />
      </section>
    </>
  );
};
