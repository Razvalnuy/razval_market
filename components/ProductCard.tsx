"use client"
import { Product } from "@/sanity.types"
import { Flame, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"; // ✅ Заменили img на Image
import Link from "next/link"
import { FC } from "react"

interface SanityImage {
	asset?: { _ref: string }
}

const ProductCard: FC<Product> = ({
	productName,
	slug,
	productImages,
	description,
	price,
	discount,
	brand,
	productStatus,
	productType,
	featuredProduct = false,
}) => {
	const getImageUrl = (image: SanityImage): string => {
		if (image?.asset?._ref) {
			const match = image.asset._ref.match(/image-([^-]+)-(\d+x\d+)-(\w+)/)
			if (match) {
				return `https://cdn.sanity.io/images/02ajn945/production/${match[1]}-${match[2]}.${match[3]}`
			}
		}
		return "/no_photo.webp"
	}

	const mainImage = productImages?.[0]
		? getImageUrl(productImages[0])
		: "/no_photo.webp"

	const statusArray = productStatus
		? [{ text: productStatus.toUpperCase() }]
		: []

	return (
		<Link href={slug ? `/market/${slug.current}` : "#"} className="block">
			<div className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:shadow-2xl shadow-[#00FF7F]/50 hover:shadow-[#00FF7F] transition-all duration-500">
				<div className="relative w-full h-full bg-neutral-950/80">
					{/* ✅ Image вместо img */}
					<Image
						src={mainImage}
						alt={productName || ""}
						fill
						className="object-contain object-top brightness-90 group-hover:brightness-100 transition-all duration-700"
						sizes="(max-width: 1024px) 100vw, 320px"
					/>

					<div className="absolute top-4 left-4 z-20 space-y-2">
						{statusArray.map((s, i) => (
							<div
								key={i}
								className="w-10 h-10 bg-gradient-to-br from-[#00FF7F]/20 to-transparent rounded-xl shadow-lg hover:bg-[#00FF7F]/30 border border-[#00FF7F]/40 transition-all duration-300 flex items-center justify-center"
							>
								<Flame className="w-5 h-5 text-[#00FF7F]" />
							</div>
						))}
					</div>

					{featuredProduct && (
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
						</button>
					</div>

					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent p-5 text-white flex flex-col gap-1 pt-3 backdrop-blur-md">
						<h3 className="text-xl font-semibold leading-tight text-white line-clamp-1">
							{productName}
						</h3>

						<p className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
							{description || `${brand} ${productType}`}
						</p>

						<div className="flex items-center gap-3 pt-1">
							<span className="text-2xl font-bold text-white drop-shadow-lg">
								{price} ₽
							</span>
							{discount && (
								<span className="inline-flex items-center bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white text-[12px] px-2.5 py-1 rounded-full font-bold shadow-lg border border-orange-400/50 backdrop-blur-sm">
									-{discount}%
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
