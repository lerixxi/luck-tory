import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { menu } from "@/data/homePage/menu";

import styles from "./HomeMenu.module.scss";

export const montserrat = Montserrat({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const HomeMenu = () => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<h2>Мої послуги</h2>
				<ul>
					{menu.map(
						({
							alt,
							src,
							width,
							height,
							title,
							description,
							href,
							linkText,
						}) => (
							<li key={title}>
								<Image
									alt={alt}
									src={src}
									width={width}
									height={height}
								/>
								<div>
									<h3>{title}</h3>
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
