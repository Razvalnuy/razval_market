"use client"

import { cn } from "@/lib/utils"
import { Product } from "@/sanity.types"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"

interface Props {
	product: Product
	className?: string
}

const AddToCartButton = ({ product, className }: Props) => {
	const isOutStock = product?.stock === 0
	const handledAddToCart = () => console.log("Добавить в корзину!")
	return (
		<div>
			<Button
				onClick={handledAddToCart}
				disabled={isOutStock}
				className={cn(
					"w-full bg-[#00FF7F]/50 text-shop_light_bg shadow-none border border-[#00FF7F]/70 font-semibold tracking-wide hover:text-white hover:bg-[#00FF7F]/70 hover:border-[#00FF7F] hoverEffect",
					className
				)}
			>
				<ShoppingCart /> {isOutStock ? "Нет в наличии" : "В корзину"}
			</Button>
		</div>
	)
}

export default AddToCartButton
