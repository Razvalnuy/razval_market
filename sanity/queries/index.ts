import { Product } from "@/sanity.types"
import { sanityFetch } from "../lib/live"

export const getProducts = async (): Promise<Product[]> => {
	try {
		const query = `*[_type == "product"]`
		const { data } = await sanityFetch({ query })
		return data
	} catch (error) {
		console.error("Ошибка загрузки продуктов:", error)
		return []
	}
}
