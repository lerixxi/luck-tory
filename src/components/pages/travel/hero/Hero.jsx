import cn from "classnames";
import styles from "./Hero.module.scss";

export const Hero = ({ urlImage }) => {
  console.log(urlImage);
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(207, 207, 207, 0.411), rgba(0, 0, 0, 0.288)), url(${urlImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
      <div className={cn("container", styles.container)}>
        <h1>
          Лише той, хто мандрує,
          <br />
          відкриває нові шляхи
        </h1>
        <h2>
          життя – це подорожі,
          <br />
          подорожі – ось це життя
        </h2>
      </div>
    </section>
  );
};
