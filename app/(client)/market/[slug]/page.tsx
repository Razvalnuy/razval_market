import { client } from "@/sanity/lib/client"
import { ArrowLeft, Flame, ShoppingCart, Star } from "lucide-react"
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
		`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      slug,
      productImages,
      description,
      price,
      discount,
      brand,
      categories[]->,
      stock,
      productStatus,
      productType,
      featuredProduct
    }`,
		{ slug }
	)

	if (!product)
		return <p className="text-center text-white py-20">Товар не найден</p>

	const mainImage = product.productImages?.[0]
		? getImageUrl(product.productImages[0])
		: "/no_photo.webp"

	const finalPrice = product.discount
		? Math.round(product.price * (1 - product.discount / 100))
		: product.price

	const statusArray = product.productStatus
		? [{ text: product.productStatus.toUpperCase() }]
		: []

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-black">
			<section className="w-full bg-gradient-to-r from-[#2d1b69]/95 via-[#00FF7F]/10 to-[#121212]/95 backdrop-blur-xl text-neutral-50 border-b border-white/10 pt-6 pb-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<Link
						href="/market"
						className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-12 group p-3 rounded-xl bg-black/30 backdrop-blur-md hover:bg-white/10 border border-white/20 hover:border-[#00FF7F]/50 transition-all duration-300"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						<span className="text-base sm:text-lg">Назад</span>
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
						<div className="relative w-full max-w-md mx-auto lg:mx-0 h-[480px] sm:h-[520px] lg:h-[600px]">
							<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-[#00FF7F]/40 border-4 border-[#00FF7F]/50 bg-neutral-950/80 backdrop-blur-xl group hover:shadow-3xl hover:shadow-[#00FF7F]/70 hover:border-[#00FF7F]/70 transition-all duration-500">
								<Image
									src={mainImage}
									alt={product.productName}
									fill
									className="object-contain object-center brightness-90 saturate-95 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-700"
									priority
									sizes="(max-width: 1024px) 100vw, 500px"
								/>
								<div className="absolute top-8 left-8 z-20 space-y-4">
									{statusArray.map((s, i) => (
										<div
											key={i}
											className="w-16 h-16 bg-gradient-to-br from-[#00FF7F]/50 to-[#00FF7F]/20 rounded-2xl shadow-lg shadow-[#00FF7F]/50 border border-[#00FF7F]/60 hover:bg-[#00FF7F]/70 backdrop-blur-sm transition-all duration-300 flex items-center justify-center hover:scale-110"
										>
											<Flame className="w-8 h-8 text-[#00FF7F] drop-shadow-md" />
										</div>
									))}
								</div>
								{product.featuredProduct && (
									<div className="absolute top-8 right-8 z-20">
										<div className="w-16 h-16 bg-gradient-to-br from-yellow-400/60 to-yellow-500/30 rounded-2xl shadow-lg shadow-yellow-400/60 border border-yellow-400/70 hover:bg-yellow-400/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center">
											<Star className="w-8 h-8 text-yellow-400 drop-shadow-md" />
										</div>
									</div>
								)}
							</div>
						</div>

						<div className="space-y-6 lg:space-y-8 text-center lg:text-left">
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-white to-[#00FF7F] bg-clip-text text-transparent drop-shadow-2xl">
								{product.productName}
							</h1>

							<div className="space-y-4 lg:space-y-6 max-w-xl mx-auto lg:mx-0">
								<div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start sm:items-baseline gap-4 lg:gap-6 flex-wrap">
									<span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#00FF7F] to-[#00cc63] bg-clip-text text-transparent shadow-2xl drop-shadow-2xl flex-shrink-0 whitespace-nowrap">
										{finalPrice.toLocaleString()} ₽
									</span>
									{product.discount && (
										<div className="flex flex-col sm:flex-row items-baseline gap-2 lg:gap-3 min-w-0 whitespace-nowrap">
											<span className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-400 line-through flex-shrink-0">
												{product.price.toLocaleString()} ₽
											</span>
											<span className="bg-gradient-to-r from-orange-500/95 to-orange-600/95 text-white text-base lg:text-lg px-5 py-2 rounded-xl font-bold shadow-lg shadow-orange-500/50">
												-{product.discount}%
											</span>
										</div>
									)}
								</div>

								<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 leading-relaxed">
									{String(product.description)}
								</p>
							</div>

							<button className="w-full max-w-lg h-14 sm:h-16 flex items-center justify-center gap-4 rounded-2xl px-8 text-lg sm:text-xl font-black bg-gradient-to-r from-[#00FF7F] to-[#00cc63] text-black shadow-2xl shadow-[#00FF7F]/70 hover:from-[#00cc63] hover:to-[#00a651] hover:shadow-3xl hover:shadow-[#00FF7F]/90 hover:scale-105 transition-all duration-300 active:scale-95 border border-[#00FF7F]/60 backdrop-blur-sm">
								<ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8" />
								<span>Развалить корзину</span>
								<span className="text-2xl sm:text-3xl">💥</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
