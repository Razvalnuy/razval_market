"use client"
import { Product } from "@/sanity.types"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

const ClientWrapper = ({
	product,
	index,
}: {
	product: Product
	index: number
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 0.6,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{ y: -10, transition: { duration: 0.3 } }}
		>
			<ProductCard product={product} />
		</motion.div>
	)
}

export default ClientWrapper
