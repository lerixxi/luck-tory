import styles from "./Hero.module.scss";

export const Hero = ({ background, title, description }) => {
  const heroStyles = {
    backgroundImage: ` url(${background})`,
  };
  return (
    <section className={styles.hero} style={heroStyles}>
      <div className="container">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </section>
  );
};
