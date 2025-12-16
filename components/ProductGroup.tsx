import { Product } from "@/sanity.types"
import { getProducts } from "@/sanity/queries"
import ClientWrapper from "./ClientWrapper"
import Empty from "./Empty"
import Error from "./Error"

async function ProductGroup() {
	let products: Product[] = []
	let error: string | null = null

	try {
		products = await getProducts()
	} catch (err) {
		console.error("Ошибка:", err)
		error = "Не удалось загрузить продукты"
	}

	if (error) return <Error message={error} />
	if (!products.length) return <Empty />

	return (
		<div className="p-4 sm:p-6 lg:p-8">
			<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 bg-linear-to-r from-[#00FF7F] to-[#00CC66] bg-clip-text">
				🔥 Развальные новинки уже здесь!
			</h2>

			<div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center">
				{products.map((product, index) => (
					<ClientWrapper key={product._id} product={product} index={index} />
				))}
			</div>
		</div>
	)
}

export default ProductGroup
