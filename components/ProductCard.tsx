"use client"

import { Product } from "@/sanity.types"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "./AddToCartButton"
import PriceFormatter from "./PriceFormatter"

interface SanityImage {
	asset?: { _ref: string }
}

const ProductCard = ({ product }: { product: Product }) => {
	const getImageUrl = (image: SanityImage): string => {
		if (image?.asset?._ref) {
			const match = image.asset._ref.match(/image-([^-]+)-(\d+x\d+)-(\w+)/)
			if (match) {
				return `https://cdn.sanity.io/images/02ajn945/production/${match[1]}-${match[2]}.${match[3]}`
			}
		}
		return "/no_photo.webp"
	}

	const mainImage = product.productImages?.[0]
		? getImageUrl(product.productImages[0])
		: "/no_photo.webp"

	const price = product?.price ?? 0
	const discount = product?.discount ?? 0

	const discountPrice = price - price * (discount / 100)

	return (
		<Link
			href={product.slug?.current ? `/market/${product.slug.current}` : "#"}
			className="group relative block w-80 rounded-2xl overflow-hidden border hover:shadow-[#00FF7F] shadow-md hoverEffect"
		>
			<div className="relative h-80">
				<Image
					src={mainImage}
					alt={product.productName || "product image"}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 1024px) 100vw, 320px"
				/>
				<div className="absolute top-3 right-3 flex flex-col gap-2">
					{product.productStatus && (
						<span className="flex items-center px-2 py-1 bg-emerald-400 text-black text-xs font-semibold rounded-full shadow">
							{product.productStatus.toUpperCase()}
						</span>
					)}
					{discount > 0 && (
						<span className="px-2 py-1 bg-red-500/90 text-white text-xs font-bold rounded-full shadow">
							-{discount}%
						</span>
					)}
				</div>
				{product.featuredProduct && (
					<div className="absolute bottom-3 right-3 bg-yellow-400/90 rounded-full p-2 shadow">
						<Star className="w-5 h-5 text-slate-900 fill-slate-900" />
					</div>
				)}
			</div>

			<div className="p-5 flex flex-col justify-between h-[180px]">
				<div>
					<h3 className="text-lg font-semibold text-white line-clamp-1">
						{product.productName || "NoName"}
					</h3>
					<p className="text-sm text-slate-400 mt-1 line-clamp-2">
						{product.description}
					</p>
				</div>

				<div className="flex items-end justify-between mt-4">
					<div className="flex flex-col">
						<PriceFormatter
							amount={discountPrice}
							className="text-2xl font-bold text-white"
						/>
						{discount > 0 && (
							<PriceFormatter
								amount={price}
								className="text-sm text-gray-500 line-through"
							/>
						)}
					</div>

					<AddToCartButton product={product} />
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
