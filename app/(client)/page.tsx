// app/page.tsx - ОЧИЩЕННЫЙ КОД БЕЗ МУСОРНЫХ СТИЛЕЙ
import Link from "next/link"

export default function HomePage() {
	return (
		<div className="min-h-screen">
			<section className="w-full bg-gradient-to-r from-[#2d1b69] via-[#00FF7F] to-[#121212] text-neutral-50 relative overflow-hidden">
				{/* ТЕМНЫЙ OVERLAY ТОЛЬКО НА МОБИЛКАХ */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 md:hidden z-10" />

				<div className="relative z-20 mx-auto max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl xl:max-w-7xl px-3 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
					<div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 xl:gap-12">
						<div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 w-full">
							<p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-300 font-medium">
								RazvalMarket
							</p>

							<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight line-clamp-2 md:line-clamp-none drop-shadow-lg">
								Добро пожаловать на{" "}
								<span className="drop-shadow-md">Развал Маркет</span>
							</h1>

							<p className="text-sm sm:text-base md:text-lg text-neutral-100/95 leading-relaxed max-w-sm sm:max-w-md md:max-w-xl drop-shadow-md">
								Идеальное место, чтобы обновить арсенал вещей, не заморачиваясь
								и наслаждаясь процессом покупки. Ты здесь не случайно!
							</p>

							<div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10">
								<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-100 drop-shadow-2xl leading-tight max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
									<span className="text-[#00FF7F] shadow-[0_0_15px_rgba(0,255,127,0.8)] sm:shadow-[0_0_20px_rgba(0,255,127,0.8)]">
										ХАОС
									</span>{" "}
									товаров,
									<span className="text-[#00FF7F] shadow-[0_0_15px_rgba(0,255,127,0.8)] sm:shadow-[0_0_20px_rgba(0,255,127,0.8)]">
										{" "}
										БЕЗУМИЕ
									</span>{" "}
									цен
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
								<Link
									href="/market"
									className="inline-flex items-center justify-center rounded-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-semibold w-full sm:w-auto bg-[#00FF7F] text-black shadow-[0_0_12px_#00FF7F] sm:shadow-[0_0_18px_#00FF7F] hover:bg-[#00cc63] hover:shadow-[0_0_20px_#00FF7F] sm:hover:shadow-[0_0_26px_#00FF7F] transition-all duration-200 text-center backdrop-blur-sm"
								>
									Развалиться по полной 💥
								</Link>
								<Link
									href="/about"
									className="inline-flex items-center justify-center rounded-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium w-full sm:w-auto border border-white/30 sm:border-white/50 text-neutral-50 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 text-center"
								>
									Узнать, что за движ ?
								</Link>
							</div>
						</div>

						<div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
							<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl sm:rounded-3xl border border-white/20 bg-neutral-950/50 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.6)] sm:shadow-[0_0_35px_rgba(0,0,0,0.8)] overflow-hidden">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_55%)]" />
								<div className="relative p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
									<p className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-neutral-300 font-medium">
										Специально для тех, кто «просто посмотреть»
									</p>
									<h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-50 leading-tight drop-shadow-md">
										Редкие трофеи с ноткой безумия
									</h2>
									<p className="text-xs sm:text-sm md:text-base text-neutral-200/95 leading-relaxed line-clamp-3 drop-shadow-md">
										Техника, шмот, странные штуки и всякая хуйня, которую
										невозможно объяснить, но всегда можно закинуть в{" "}
										<span className="text-[#00FF7F] shadow-[0_0_15px_rgba(0,255,127,0.8)]">
											корзину
										</span>
										.
									</p>
									<div className="flex items-center gap-1 sm:gap-2 pt-1 sm:pt-2">
										<span className="text-xs sm:text-sm text-neutral-300 font-medium">
											Стартовый развал уже
										</span>
										<span className="flex items-center gap-1 sm:gap-2 rounded-full bg-[#00FF7F]/20 border border-[#00FF7F]/60 px-2 sm:px-3 py-1 text-xs sm:text-sm text-[#00FF7F] font-semibold shadow-md">
											Открыт
											<div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00FF7F] rounded-full shadow-[0_0_8px_#00FF7F] animate-ping" />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-xs sm:max-w-md md:max-w-4xl lg:max-w-6xl px-3 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
				<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center md:text-left leading-tight">
					Здесь лучшие{" "}
					<span className="tracking-[0.08em] sm:tracking-[0.10em] text-neutral-300 font-medium">
						&quot;развальные&quot;
					</span>{" "}
					предложения!
				</h2>

				<Link
					href="/market"
					className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-3xl bg-[#002211]/50 backdrop-blur-md border border-[#00FF7F]/50 shadow-[0_0_25px_rgba(0,255,127,0.4)] hover:shadow-[0_0_40px_rgba(0,255,127,0.7)] hover:bg-[#004422]/70 hover:border-[#00FF7F] transition-all duration-300 cursor-pointer p-4 sm:p-6 md:p-8 w-full"
				>
					<div className="flex items-center gap-2 sm:gap-4 flex-1 w-full">
						<div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#00FF7F] rounded-full shadow-[0_0_12px_#00FF7F] animate-ping flex-shrink-0" />
						<h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#00FF7F] to-[#00FF7F] bg-clip-text text-transparent drop-shadow-lg leading-tight flex-1">
							Весь ассортимент здесь
						</h3>
					</div>

					<div className="w-full sm:w-auto">
						<p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-xs mb-3 sm:mb-0 sm:pr-4 text-left sm:text-right hidden sm:block">
							<span className="font-semibold bg-gradient-to-r from-[#00FF7F] to-[#00FF7F] bg-clip-text text-transparent">
								Кликните по блоку
							</span>
						</p>
					</div>
				</Link>
			</section>
		</div>
	)
}
