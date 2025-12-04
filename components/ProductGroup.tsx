"use client"
import { Product } from "@/sanity.types"; // ✅ Добавили импорт
import { client } from "@/sanity/lib/client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

import Empty from "./Empty"
import Error from "./Error"
import Loading from "./Loading"

const ProductGroup = () => {
	// ✅ Типизированные состояния
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const fetchProducts = async () => {
		try {
			setLoading(true)
			setError(null)
			// ✅ Типизированный fetch
			const data = await client.fetch<Product[]>(`*[_type == "product"]`)
			console.log("data", data)
			setProducts(data || [])
		} catch (error) {
			console.error("Ошибка загрузки продуктов:", error)
			setError("Не удалось загрузить продукты")
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	if (loading) return <Loading />
	if (error) return <Error message={error} onRetry={fetchProducts} />
	if (products.length === 0) return <Empty />

	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<motion.h2
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-[#00FF7F] to-[#00CC66] bg-clip-text text-transparent"
			>
				🔥 Развальные новинки уже здесь!
			</motion.h2>

			<div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center">
				<AnimatePresence>
					{products.map((product: Product, index) => (
						<motion.div
							key={product._id}
							initial={{ opacity: 0, y: 50, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={{ y: -10, transition: { duration: 0.3 } }}
						>
							<ProductCard {...product} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default ProductGroup
