import { Form } from "./form/Form";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { SlBubbles, SlCallIn } from "react-icons/sl";
import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer id="footer" className={styles.footer}>
			<div className={`container ${styles.container}`}>
				<div className={styles.contactsBox}>
					<h2>Контакти</h2>
					<ul className={styles.contactsList}>
						<li>
							<p>
								<SlCallIn />
							</p>
							<p>+380 67 471 88 83</p>
						</li>
						<li>
							<p>
								<SlBubbles />
							</p>
							<p>luck_tory@ukr.net</p>
						</li>
						<li className={styles.iconsBox}>
							<ul>
								<li>
									<Link
										href="https://t.me/Viktoriia_Vyshnevetska"
										target="_blank"
									>
										<FaTelegramPlane />
									</Link>
								</li>
								<li>
									<Link
										href="https://www.instagram.com/luck_tory/"
										target="_blank"
									>
										<SiInstagram />
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className={styles.formBox}>
					<h2>Зв&#39;язатися зі мною</h2>
					<Form />
				</div>
			</div>
		</footer>
	);
};
