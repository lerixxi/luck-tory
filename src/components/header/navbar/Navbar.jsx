import Link from "next/link";
import { navbar } from "@/data/header";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
	return (
		<nav className={styles.navMenu}>
			<ul className={styles.navList}>
				{navbar.map(({ title, path }) => (
					<li key={title} className={styles.navItem}>
						<Link
							href={path}
							scroll={false}
							className={styles.navLink}
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
