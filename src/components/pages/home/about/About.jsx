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
            <video
              className={styles.video}
              src="/video/test.mp4"
              type="video/mp4"
              controls
              poster="/images/homePage/menu2.2.jpg"
              width={250}
              height={444}>
              Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t worry, you
              can and watch it with your favorite video player!
            </video>
          </li>
          <li>
            <h2>Про мене</h2>
            <p className={styles.text}>
              Я дуже люблю взаємодіяти з людьми. Подорожувати, фіксувати красу і показувати своїм
              моделям, наскільки вони прекрасні. Ділитися своїм досвідом. Пізнавати світ і
              розвиватися. Я запрошую вас разом зі мною подивитися наш чудовий світ!
            </p>
            <p>Втім, це відео саме скаже все ЗА мене і ПРО мене!</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
