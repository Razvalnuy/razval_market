import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "RazvalnuyShop",
	description: "Здесь вы купите точно хуйню",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang="ru">
				<body className="bg-neutral-900 text-neutral-200 antialiased">
					<main className="min-h-screen flex flex-col">
						<SignedOut>
							<SignIn routing="hash" />
						</SignedOut>
						<SignedIn>
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
						</SignedIn>
					</main>
				</body>
			</html>
		</ClerkProvider>
	)
}
