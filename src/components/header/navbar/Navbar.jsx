import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { navbar } from "@/data/header";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <nav className={styles.navMenu}>
      <ul className={styles.navList}>
        {navbar.map(({ title, path }) => (
          <li key={title} className={styles.navItem}>
            <Link
              href={path}
              className={cn(styles.navLink, currentPath === path && styles.navLinkActive)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
