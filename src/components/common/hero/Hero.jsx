import styles from "./Hero.module.scss";

export const Hero = ({ background, title, description }) => {
	const heroStyles = {
		backgroundImage: `linear-gradient(to right, #0b464e7a, #765fa173), url(${background})`,
	};
	return (
		<section className={styles.hero} style={heroStyles}>
			<h1>{title}</h1>
			<h2>{description}</h2>
		</section>
	);
};
