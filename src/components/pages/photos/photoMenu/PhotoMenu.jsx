import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { menu } from "@/data/photosPage/menu";
import styles from "./PhotoMenu.module.scss";

export const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const PhotoMenu = () => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<h2>Фотосесії</h2>
				<ul>
					{menu.map(
						({
							alt,
							src,
							width,
							height,
							description,
							href,
							linkText,
						}) => (
							<li key={src}>
								<Image
									alt={alt}
									src={src}
									width={width}
									height={height}
								/>
								<div className={styles.descriptionBox}>
									<p className={` ${montserrat.className}`}>
										{description}
									</p>
								</div>

								<Link href={href}>{linkText}</Link>
							</li>
						)
					)}
				</ul>
			</div>
		</section>
	);
};
