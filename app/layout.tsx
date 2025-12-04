export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className="bg-neutral-900 text-neutral-200 antialiased">
				{children}
			</body>
		</html>
	)
}
