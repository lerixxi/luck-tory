import Image from "next/image";
import Link from "next/link";
import { menu } from "@/data/homePage/menu";
import styles from "./HomeMenu.module.scss";

export const HomeMenu = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2>Мої послуги</h2>
        <ul>
          {menu.map((info) => (
            <li key={info.title}>
              <Image
                alt={info.alt}
                src={info.src}
                width={info.width}
                height={info.height}
                sizes="(max-width: 768px) 90vw, 40vw"
              />
              <div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>

              <Link href={info.href}>{info.linkText}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
