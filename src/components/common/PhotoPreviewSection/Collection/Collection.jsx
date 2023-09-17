import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/styles.css";
import styles from "./Collection.module.scss";
import Image from "next/image";

export const Collection = ({ name, images }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const slides = images.map(({ url }) => ({ src: url }));

  return (
    <>
      <div className={styles.collection} onClick={() => setIsShowModal(true)}>
        <Image
          src={images[0].url}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
          sizes="(max-width: 768px) 90vw, 40vw"
          className={styles.collection__big}
        />

        <div className={styles.collection__bottom}>
          <Image
            src={images[1].url}
            alt={images[1].alt}
            width={images[1].width}
            height={images[1].height}
            sizes="30vw"
            className={styles.collection__mini}
          />

          <Image
            src={images[2].url}
            alt={images[2].alt}
            width={images[2].width}
            height={images[2].height}
            sizes="30vw"
            className={styles.collection__mini}
          />

          <Image
            src={images[3].url}
            alt={images[3].alt}
            width={images[3].width}
            height={images[3].height}
            sizes="30vw"
            className={styles.collection__mini}
          />
        </div>
        <h4>{name}</h4>
      </div>

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
