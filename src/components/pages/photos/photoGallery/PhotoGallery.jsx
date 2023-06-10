import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { photos } from "@/data/photosPage/gallery";
import styles from "./PhotoGallery.module.scss";

export const PhotoGallery = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	const images = photos.map((photo) => photo.src);

	const openLightbox = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
		document.body.style.overflow = "hidden"; // prevent scrolling when the lightbox is open
	};

	const closeLightbox = () => {
		setIsOpen(false);
		document.body.style.overflow = "unset"; // enable scrolling again when the lightbox is closed
	};

	return (
		<section>
			<div className={`container ${styles.container}`}>
				<div className={styles.gallery}>
					{photos.map((photo, index) => (
						<div key={index} onClick={() => openLightbox(index)}>
							<Image
								src={photo.src}
								alt={photo.alt}
								width={photo.width}
								height={photo.height}
							/>
						</div>
					))}
				</div>
				{isOpen && (
					<div className={styles.lightbox}>
						<span className={styles.close} onClick={closeLightbox}>
							&times;
						</span>
						<Image
							className={styles.lightboxImg}
							src={images[photoIndex]}
							alt="Gallery"
							width={700}
							height={481}
						/>
						<div className={styles.lightboxContent}>
							<button
								onClick={() =>
									setPhotoIndex(
										(photoIndex + images.length - 1) %
											images.length
									)
								}
							>
								Prev
							</button>
							<button
								onClick={() =>
									setPhotoIndex(
										(photoIndex + 1) % images.length
									)
								}
							>
								Next
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};
