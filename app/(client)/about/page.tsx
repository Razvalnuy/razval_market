import Container from "@/components/Container"
import TelegramIcon from "@/components/TelegramIcons"
import { Github, Mail, PhoneCall, Truck, Youtube } from "lucide-react"
import Link from "next/link"

const About = () => {
	return (
		<div className="min-h-screen ">
			<section className="mt-5 relative overflow-hidden rounded-[3rem] mx-4 md:mx-8 lg:mx-16 mb-24 bg-gradient-to-br from-[#1a0033] via-[#00FF7F] to-[#000] border-4 border-[#00FF7F]/40 shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,255,127,0.6)]">
				<div className="absolute inset-0 bg-gradient-to-r from-[#00FF7F]/5 via-transparent to-[#00FF7F]/5 animate-pulse [animation-duration:4s]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,255,127,0.3)_0%,transparent_40%),radial-gradient(circle_at_85%_85%,rgba(45,27,105,0.4)_0%,transparent_40%)]" />
				<div className="absolute top-10 left-10 w-72 h-72 bg-[#00FF7F]/20 rounded-full blur-3xl animate-[spin_20s_linear_infinite] opacity-50" />
				<div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2d1b69]/30 rounded-full blur-3xl animate-[spin_25s_linear_infinite_reverse] opacity-40" />

				<div className="relative z-20 p-12 md:p-20 lg:p-28 text-center">
					<div className="inline-flex flex-col items-center mb-12 animate-[float_6s_ease-in-out_infinite]">
						<h1 className="rounded-4xl p-2 text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#00FF7F] via-white to-[#00FF7F] bg-clip-text text-transparent shadow-[0_0_80px_rgba(0,255,127,1)] drop-shadow-2xl">
							О нас
						</h1>

						<div className="w-64 md:w-80 h-px bg-gradient-to-r from-[#00FF7F]/60 to-transparent mt-6 rounded-full shadow-lg" />
					</div>

					<p className="text-neutral-200/90 text-2xl max-w-3xl mx-auto">
						RazvalMarket - всякая хуйня, которую невозможно объяснить, но всегда
						можно закинуть в{" "}
						<span className="text-[#00FF7F] shadow-[0_0_20px_rgba(0,255,127,0.6)]">
							корзину
						</span>
					</p>
				</div>
			</section>

			<section className="mb-24 rounded-3xl bg-gradient-to-r from-[#2d1b69]/40 via-[#00FF7F]/20 to-[#121212]/40 backdrop-blur-2xl border-2 border-[#00FF7F]/30 shadow-[0_0_60px_rgba(0,255,127,0.2)] p-12">
				<Container>
					<h2 className="text-4xl md:text-5xl font-black mb-16 text-center bg-gradient-to-r from-[#00FF7F] via-white to-[#00FF7F] bg-clip-text text-transparent shadow-[0_0_50px_rgba(0,255,127,0.8)] uppercase tracking-widest">
						НАЙДИ МЕНЯ ВЕЗДЕ
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
						{[
							{
								icon: TelegramIcon,
								href: "https://t.me/razvalnuy",
								label: "Telegram",
								text: "t.me/razvalnuy",
							},
							{
								icon: Github,
								href: "https://github.com/razvalnuy",
								label: "GitHub",
								text: "github.com/razvalnuy",
							},
							{
								icon: Youtube,
								href: "https://www.youtube.com/@razvalnuy",
								label: "YouTube",
								text: "youtube.com/@razvalnuy",
							},
							{
								icon: PhoneCall,
								href: "https://wa.me/79882743324",
								label: "WhatsApp",
								text: "+7 988 274-33-24",
							},
							{
								icon: Mail,
								href: "mailto:razvalnuy@gmail.com",
								label: "Email",
								text: "razvalnuy@gmail.com",
							},
						].map(({ icon: Icon, href, label, text }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="group relative bg-neutral-900/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-[#00FF7F]/20 hover:border-[#00FF7F]/60 hover:bg-[#00FF7F]/5 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,127,0.4)] flex flex-col items-center text-center h-full min-h-[120px] sm:min-h-[140px] lg:min-h-[180px]"
							>
								<div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#00FF7F]/20 to-transparent rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-xl group-hover:shadow-2xl group-hover:rotate-12 transition-all">
									<Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#00FF7F] drop-shadow-lg" />
								</div>
								<h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 lg:mb-2 group-hover:text-[#00FF7F] transition-colors leading-tight">
									{label}
								</h4>
								<p className="text-xs sm:text-sm lg:text-sm font-mono tracking-wider text-neutral-300 leading-tight">
									{text}
								</p>
							</a>
						))}
					</div>
				</Container>
			</section>

			<section className="text-center py-20 bg-gradient-to-b from-[#121212]/50 to-transparent backdrop-blur-xl rounded-3xl border border-[#00FF7F]/20 shadow-2xl">
				<Container>
					<Truck className="w-24 h-24 text-[#00FF7F] mx-auto mb-8 animate-bounce shadow-2xl drop-shadow-2xl" />
					<h3 className="text-3xl md:text-4xl font-black mb-6 text-transparent bg-gradient-to-r from-white via-[#00FF7F] to-white bg-clip-text">
						РАЗВАЛИСЬ БЫСТРЕЕ!
					</h3>

					<Link
						href="/market"
						className="inline-block px-10 py-4 bg-gradient-to-r from-[#00FF7F] via-[#00cc63] to-[#00FF7F] text-black font-black text-xl rounded-3xl shadow-[0_0_60px_rgba(0,255,127,0.9)] hover:shadow-[0_0_100px_rgba(0,255,127,1)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 uppercase tracking-[0.3em] relative overflow-hidden group"
					>
						<span className="relative z-10">В КОРЗИНУ ВСЁ!</span>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
					</Link>
				</Container>
			</section>
		</div>
	)
}

export default About
