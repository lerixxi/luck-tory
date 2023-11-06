import React from "react";
import { PhotoPreviewSection } from "@/components/common/PhotoPreviewSection/PhotoPreviewSection";
import { familyPhotos } from "@/data/photosPage/collectionPhoto";
import styles from "./FamilyPage.module.scss";
import { Hero } from "@/components/common/hero/Hero";

export const FamilyPage = () => {
  return (
    <>
      <Hero
        background="/images/photosPage/familyPage/hero.jpg"
        title="Фото про кохання — це мистецтво єднання в кожному кадрі"
        description="Давайте разом створимо вашу неповторну історію!"
      />
      <section className={styles.photoSection}>
        <PhotoPreviewSection collection={familyPhotos} />
      </section>
    </>
  );
};
