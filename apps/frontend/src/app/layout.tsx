import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dreamers",
	description: "An immersive GenAI experience",
	manifest: "/manifest.json",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (typeof window !== "undefined") {
		console.log("Registering service worker");
		if (navigator.serviceWorker) {
			navigator.serviceWorker
				.register("./sw.js")
				.then(function (registration) {
					console.log(
						"Excellent, registered with scope: ",
						registration.scope
					);
				});
		}
	}

	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
