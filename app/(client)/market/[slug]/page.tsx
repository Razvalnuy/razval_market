import AddToCartButton from "@/components/AddToCartButton"
import PriceFormatter from "@/components/PriceFormatter"
import { client } from "@/sanity/lib/client"
import { ArrowLeft, Flame, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductPageProps {
	params: Promise<{ slug: string }>
}

interface SanityImage {
	asset: { _ref: string }
}

function getImageUrl(image: SanityImage): string {
	if (image?.asset?._ref) {
		const match = image.asset._ref.match(/image-([^-]+)-(\d+x\d+)-(\w+)/)
		if (match) {
			return `https://cdn.sanity.io/images/02ajn945/production/${match[1]}-${match[2]}.${match[3]}`
		}
	}
	return "/no_photo.webp"
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { slug } = await params

	const product = await client.fetch(
		`*[_type == "product" && slug.current == $slug][0]`,
		{ slug }
	)

	if (!product)
		return (
			<p className="text-center text-neutral-400 py-32 text-xl">
				{/* сделать норм 404 не найден */}
				Товар не найден
			</p>
		)

	const mainImage = product.productImages?.[0]
		? getImageUrl(product.productImages[0])
		: "/no_photo.webp"

	const discountPrice = product.price - product.price * (product.discount / 100)

	return (
		<div className="flex items-center justify-center bg-neutral-950 text-neutral-50 py-5 px-4 ">
			<div className="w-full max-w-6xl space-y-8">
				<Link
					href="/market"
					className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
				>
					<ArrowLeft className="w-5 h-5" />
					<span>Назад</span>
				</Link>

				<div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 bg-neutral-900/70 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden p-6 sm:p-10">
					<div className="flex-1 relative rounded-2xl overflow-hidden bg-neutral-800 min-h-[420px] lg:min-h-[480px]">
						<Image
							src={mainImage}
							alt={product.productName}
							width={700}
							height={700}
							className="object-cover w-full hover:scale-105 hoverEffect"
							priority
						/>

						<div className="absolute top-4 left-4 flex gap-3">
							<div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
								<Flame className="w-6 h-6 text-emerald-300" />
							</div>
							{product.featuredProduct && (
								<div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
									<Star className="w-6 h-6 text-yellow-400" />
								</div>
							)}
						</div>
					</div>

					<div className="flex-1 flex flex-col justify-between space-y-6">
						<div className="space-y-4">
							<h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
								{product.productName}
							</h1>

							<div className="flex flex-wrap gap-3 items-baseline">
								<div className="flex flex-col">
									<PriceFormatter
										amount={discountPrice}
										className="text-2xl font-bold text-white"
									/>
								</div>
								{product.discount > 0 && (
									<>
										<PriceFormatter
											amount={product.price}
											className="text-md text-gray-500 line-through"
										/>
										<span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-400/20 font-medium">
											-{product.discount}%
										</span>
									</>
								)}
							</div>

							<p className="text-neutral-300 text-lg leading-relaxed">
								{String(product.description)}
							</p>
						</div>

						<AddToCartButton product={product} className="h-12" />
					</div>
				</div>
			</div>
		</div>
	)
}
