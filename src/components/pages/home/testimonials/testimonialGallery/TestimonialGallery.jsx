import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/data/homePage/testimonials";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import styles from "./TestimonialGallery.module.scss";

export const TestimonialGallery = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(1);

	useEffect(() => {
		function updateSize() {
			const width = window.innerWidth;
			setItemsPerPage(width >= 1200 ? 3 : width >= 768 ? 2 : 1);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const goNext = () =>
		setActiveIndex((activeIndex + itemsPerPage) % testimonials.length);
	const goPrev = () =>
		setActiveIndex(
			(activeIndex - itemsPerPage + testimonials.length) %
				testimonials.length
		);

	return (
		<div className={styles.box}>
			<button onClick={goPrev}>
				<MdArrowBackIos />
			</button>
			<ul className={styles.testimonialsList}>
				{testimonials
					.slice(activeIndex, activeIndex + itemsPerPage)
					.map(({ name, alt, src, width, height, text }) => (
						<li key={src}>
							<Image
								alt={alt}
								src={src}
								width={width}
								height={height}
							/>
							<p>&laquo;{text}&raquo;</p>
							<h3>{name}</h3>
						</li>
					))}
			</ul>
			<button onClick={goNext}>
				<MdOutlineArrowForwardIos />
			</button>
		</div>
	);
};
