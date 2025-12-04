// ProductCard.tsx - БЕЗ ДЕФОЛТНЫХ ЗНАЧЕНИЙ
import { Flame, ShoppingCart, Star } from "lucide-react"
import { FC } from "react"

interface ProductStatus {
	text: string
	color?: string
}

interface ProductCardProps {
	products?: string
	name: string
	slug?: string
	images: string[]
	description: string
	price: number
	discount?: number
	categories: string[]
	stock: number
	brand: string
	status: ProductStatus[]
	type: string
	featured: boolean
}

const ProductCard: FC<ProductCardProps> = ({
	products,
	name,
	slug,
	images,
	description,
	price,
	discount,
	categories,
	stock,
	brand,
	status,
	type,
	featured,
}) => {
	const mainImage = images[0]
	const finalPrice = discount ? price * (1 - discount / 100) : price

	return (
		<div className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:shadow-2xl shadow-[#00FF7F]/50 hover:shadow-[#00FF7F] transition-all duration-500">
			<img
				src={mainImage}
				alt={name}
				className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
				loading="lazy"
			/>

			<div className="absolute top-4 left-4 z-20 space-y-2">
				{status.map((s, i) => (
					<div
						key={i}
						className="w-10 h-10 bg-gradient-to-br from-[#00FF7F]/20 to-transparent rounded-xl shadow-lg hover:bg-[#00FF7F]/30 border border-[#00FF7F]/40 transition-all duration-300 flex items-center justify-center"
					>
						<Flame className="w-5 h-5 text-[#00FF7F]" />
					</div>
				))}
			</div>

			{featured && (
				<div className="absolute top-4 right-4 z-20">
					<div className="w-10 h-10 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-xl shadow-lg hover:bg-yellow-400/40 border border-yellow-400/40 transition-all duration-300 flex items-center justify-center">
						<Star className="w-5 h-5 text-yellow-400" />
					</div>
				</div>
			)}

			<div className="absolute bottom-4 right-4 z-20">
				<button className="bg-white/95 hover:bg-white text-slate-900 text-xs font-bold py-2.5 px-4 rounded-xl shadow-2xl border border-white/50 hover:border-white hover:shadow-white/50 transition-all duration-300 flex items-center gap-2 group-hover:scale-105 backdrop-blur-sm">
					<ShoppingCart className="w-4 h-4" />
					Купить
					{discount && (
						<span className="bg-[#00FF7F]/90 text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
							-{discount}%
						</span>
					)}
				</button>
			</div>

			<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent p-5 text-white flex flex-col gap-1 pt-3 backdrop-blur-md">
				<h3 className="text-xl font-semibold leading-tight text-white line-clamp-1">
					{name}
				</h3>

				<p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
					{description}
				</p>

				<div className="flex items-center justify-between pt-1">
					<span className="text-2xl font-bold text-white drop-shadow-lg">
						${finalPrice.toFixed(0)}
					</span>
					{discount && (
						<span className="text-lg text-slate-400 line-through">
							${price.toFixed(0)}
						</span>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductCard
