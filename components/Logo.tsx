import { cn } from "@/lib/utils"
import Link from "next/link"

const LogoTerracottaOat = ({
	className,
	spanDesign,
}: {
	className?: string
	spanDesign?: string
}) => {
	return (
		<Link href={"/"} className="inline-block">
			<h2
				className={cn(
					"text-2xl text-[#00FF7F] font-black tracking-wider uppercase hover:text-[#F5F5DC] hoverEffect group font-sans",
					"drop-shadow-[0_0_5px_#00FF7F]] hover:drop-shadow-[0_0_15px_#00FF7F] hover:drop-shadow-[0_0_25px_#00FF7F]",
					className
				)}
			>
				Razval
				<span
					className={cn(
						"text-[#F5F5DC] group-hover:text-[#00FF7F] hoverEffect",
						"drop-shadow-[0_0_2px_#00FF7F] group-hover:drop-shadow-[0_0_15px_#00FF7F]",
						spanDesign
					)}
				>
					nuy
				</span>
			</h2>
		</Link>
	)
}

export default LogoTerracottaOat
