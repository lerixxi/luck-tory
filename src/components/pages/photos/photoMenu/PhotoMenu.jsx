import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/data/photosPage/menu";
import styles from "./PhotoMenu.module.scss";

export const PhotoMenu = () => {
  return (
    <section className={styles.section}>
      <div className={cn("container", styles.container)}>
        <h2>Фотосесії</h2>
        <ul>
          {menu.map(({ alt, src, width, height, description, href, linkText }) => (
            <li key={src}>
              <Image
                alt={alt}
                src={src}
                width={width}
                height={height}
                sizes="(max-width: 768px) 90vw, 40vw"
              />
              <div className={styles.descriptionBox}>
                <p>{description}</p>
              </div>

              <Link href={href}>{linkText}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
