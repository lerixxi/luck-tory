import { Link as LinkScroll } from "react-scroll";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`${styles.hero}  `}>
      <div className={`container ${styles.container}`}>
        <h1>Вікторія Вишневецька</h1>

        <h2>Твій персональний психолог, фотограф і організатор турів</h2>
        <LinkScroll to="about" spy={true} smooth={true} offset={-139} duration={0}>
          Докладніше
        </LinkScroll>
      </div>
    </section>
  );
};
