"use client"

import { cn } from "@/lib/utils"
import { Github, Youtube } from "lucide-react"
import Link from "next/link"
import TelegramIcon from "./TelegramIcons"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

interface Props {
	className?: string
	iconClassName?: string
	toolTipClassName?: string
}

const SocialMedia = ({ className, iconClassName, toolTipClassName }: Props) => {
	const socialLink = [
		{
			title: "Telegram",
			href: "https://t.me/razvalnuy",
			icon: TelegramIcon,
		},
		{
			title: "GitHub",
			href: "https://github.com/razvalnuy",
			icon: Github,
		},
		{
			title: "YouTube",
			href: "https://www.youtube.com/@razvalnuy",
			icon: Youtube,
		},
	]

	return (
		<TooltipProvider>
			<div className={cn("flex items-center gap-3.5", className)}>
				{socialLink.map((item) => (
					<Tooltip key={item.title}>
						<TooltipTrigger asChild>
							<Link
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent hover:bg-white/10 transition-colors",
									iconClassName
								)}
							>
								<item.icon className="h-6 w-6" />
							</Link>
						</TooltipTrigger>
						<TooltipContent
							side="top"
							align="center"
							className={cn(
								"bg-white text-darkColor font-semibold",
								toolTipClassName
							)}
						>
							<p>{item.title}</p>
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</TooltipProvider>
	)
}

export default SocialMedia
