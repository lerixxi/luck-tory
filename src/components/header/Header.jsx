import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar/Navbar";

import styles from "./Header.module.scss";

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			setIsScrolled(scrollTop > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${styles.header} ${
				isScrolled ? styles.transparent : ""
			}`}
		>
			<div className={`container ${styles.container}`}>
				<Link className={styles.logoLink} href="/">
					<p className={styles.logoText}>Luck Tory</p>
					<Image
						src="/images/logo.png"
						alt="logo"
						width={50}
						height={50}
						className={styles.logoImg}
					/>
				</Link>
				<Navbar />
			</div>
		</header>
	);
};
