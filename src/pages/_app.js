import Layout from "@/components/Layout";
import { Arsenal } from "next/font/google";

import "@/styles/globals.scss";

export const arsenal = Arsenal({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${arsenal.style.fontFamily};
				}
			`}</style>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
