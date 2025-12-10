import { cn } from "@/lib/utils"

interface Props {
	amount: number | undefined
	className?: string
}

const PriceFormatter = ({ amount, className }: Props) => {
	const formattedPrice = new Number(amount).toLocaleString("ru-RU", {
		currency: "RUB",
		style: "currency",
		minimumFractionDigits: 0,
	})
	return (
		<span className={cn("text-sm font-semibold text-darkColor", className)}>
			{formattedPrice}
		</span>
	)
}

export default PriceFormatter
