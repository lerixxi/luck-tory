import React from "react";
import { PhotoPreviewSection } from "@/components/common/PhotoPreviewSection/PhotoPreviewSection";
import { tourPhotos } from "@/data/photosPage/collectionPhoto";
import styles from "./ToursPage.module.scss";
import { Hero } from "@/components/common/hero/Hero";

export const ToursPage = () => {
  return (
    <>
      <Hero
        background="/images/photosPage/toursPage/hero.jpg"
        title="Лише той, хто мандрує, відкриває нові шляхи"
        description="Давайте подорожувати разом!"
      />
      <section className={styles.photoSection}>
        <PhotoPreviewSection collection={tourPhotos} />
      </section>
    </>
  );
};
