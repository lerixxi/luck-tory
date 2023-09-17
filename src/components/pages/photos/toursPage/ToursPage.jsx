import cn from "classnames";
import React from "react";
import { PhotoPreviewSection } from "@/components/common/PhotoPreviewSection/PhotoPreviewSection";
import { tourPhotos } from "@/data/photosPage/collectionPhoto";
import styles from "./ToursPage.module.scss";

export const ToursPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={cn("container", styles.container)}>
          <h1>Люди поділяються на 2 категорії:</h1>
          <h2>
            ті, котрі люблять фотографуватися,
            <br />і ті, котрі ще не знають, що вони люблять фотографуватися
          </h2>
        </div>
      </section>
      <section className={styles.photoSection}>
        <PhotoPreviewSection collection={tourPhotos} />
      </section>
    </>
  );
};
