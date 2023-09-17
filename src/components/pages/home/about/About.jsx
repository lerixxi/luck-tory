import Image from "next/image";
import { videoUrls } from "@/data/homePage/about";
import { VideoGallery } from "./videoGallery/VideoGallery";
import { Montserrat } from "next/font/google";

import styles from "./About.module.scss";

export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.container}`}>
        <ul className={styles.list}>
          <li>
            <div className={styles.video}>
              <Image
                alt="тут буде video"
                src="/images/homePage/menu2.2.jpg"
                width={3648}
                height={5472}
                sizes="40vw"
              />
            </div>
          </li>
          <li>
            <h2>Про мене</h2>
            <p className={`${styles.text} ${montserrat.className}`}>
              Я дуже люблю взаємодіяти з людьми. Подорожувати, фіксувати красу і показувати своїм
              моделям, наскільки вони прекрасні. Ділитися своїм досвідом. Пізнавати світ і
              розвиватися. Я запрошую вас разом зі мною подивитися наш чудовий світ!
            </p>
            <p className={`${montserrat.className}`}>
              Втім, це відео саме скаже все ЗА мене і ПРО мене!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
