import { cn } from "@/lib/utils"
import { TooltipContent } from "@radix-ui/react-tooltip"
import Container from "./Container"
import Logo from "./Logo"
import SocialMedia from "./SocialMedia"
import { Tooltip, TooltipTrigger } from "./ui/tooltip"

const Footer = () => {
	return (
		<footer
			className="border-t bg-[linear-gradient(135deg,_rgba(255,255,255,0.08)_8%,_transparent_0,_transparent_50%,_rgba(255,255,255,0.05)_0,_rgba(255,255,255,0.05)_58%,_transparent_0,_transparent_100%)]
    bg-[size:32px_32px]"
		>
			<Container>
				<div className="flex justify-between py-6 text-center text-sm items-center ">
					<div>
						<Logo className="text-xl" />
						<Tooltip>
							<TooltipTrigger>
								<TooltipContent
									side="top"
									align="center"
									className={cn("bg-darkColor text-white font-semibold p-1")}
								>
									<p>су4ка даже не пытайся </p>
								</TooltipContent>
							</TooltipTrigger>
						</Tooltip>
					</div>

					<p className="text-sm font-bold text-white/50">
						© {new Date().getFullYear()} Все права защищены. ByRazvalnuy
					</p>

					<div>
						<SocialMedia
							className="text-[#00FF7F]"
							iconClassName="border-[#00FF7F]/30 hover:border-[#00FF7F]/100 hover:text-white hover:bg-[#00FF7F] transition-all duration-300"
							toolTipClassName="bg-white/90 text-[#00FF7F] shadow-lg font-medium text-black text-sm"
						/>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
