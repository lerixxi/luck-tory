import { TestimonialGallery } from "./testimonialGallery/TestimonialGallery";
import styles from "./Testimonials.module.scss";

export const Testimonials = () => {
	return (
		<section className={styles.section}>
			<div className={`container `}>
				<div className={styles.container}>
					<h2>Відгуки</h2>
					<div>
						<TestimonialGallery />
					</div>
				</div>
			</div>
		</section>
	);
};
