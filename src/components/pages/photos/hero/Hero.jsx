import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`${styles.hero}  `}>
      <div className={`container ${styles.container}`}>
        <h1>Люди поділяються на 2 категорії:</h1>
        <h2>
          ті, котрі люблять фотографуватися,
          <br />і ті, котрі ще не знають, що вони люблять фотографуватися
        </h2>
      </div>
    </section>
  );
};
