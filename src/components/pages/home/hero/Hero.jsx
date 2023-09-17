import Link from "next/link";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`${styles.hero}  `}>
      <div className={`container ${styles.container}`}>
        <h1>Вікторія Вишневецька</h1>

        <h2>Твій персональний психолог, фотограф і організатор турів</h2>
        <a href="#about">Докладніше</a>
      </div>
    </section>
  );
};
