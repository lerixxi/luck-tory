import Link from "next/link";
import { navbar } from "@/data/header";
import Image from "next/image";

export const Header = () => {
	return (
		<header>
			<div>
				<Link href="/">
					<p>Luck Tory</p>
					<Image
						src="/images/logo.png"
						alt="logo"
						width={50}
						height={50}
					/>
				</Link>
				<nav>
					<ul>
						{navbar.map((el) => (
							<li key={el}>
								<Link href={`#${el}`} scroll={false}>
									{el}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
