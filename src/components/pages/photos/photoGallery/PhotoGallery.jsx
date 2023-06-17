import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { photos } from "@/data/photosPage/gallery";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "./PhotoGallery.module.scss";

export const PhotoGallery = () => {
	const [current, setCurrent] = useState(0);

	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrent((prevIndex) =>
					prevIndex === photos.length - 1 ? 0 : prevIndex + 1
				),
			3000
		);

		return () => {
			resetTimeout();
		};
	}, [current]);

	const nextSlide = () => {
		setCurrent(current === photos.length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? photos.length - 1 : current - 1);
	};

	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<button onClick={prevSlide}>
					<MdArrowBackIos />
				</button>
				<ul className={styles.slider}>
					{photos.map((photo, index) => (
						<li
							key={index}
							className={`${styles.slide} ${
								index === current ? styles.active : ""
							}`}
						>
							<Image
								src={photo.src}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
							/>
						</li>
					))}
				</ul>
				<button onClick={nextSlide}>
					<MdOutlineArrowForwardIos />
				</button>
			</div>
		</section>
	);
};
