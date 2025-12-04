// ProductGroup.tsx - С РЕАЛЬНЫМИ ПРОДУКТАМИ
import ProductCard from "./ProductCard"

const products = [
	{
		products: "Гаджеты",
		name: "Xiaomi Mi Band 10 Pro",
		slug: "xiaomi-mi-band-10-pro",
		images: ["./1-1.jpg.webp"],
		description:
			"Фитнес-браслет с AMOLED экраном, GPS, 21 дн. батареи и 150+ спортивных режимов",
		price: 4990,
		discount: 20,
		categories: ["Гаджеты", "Фитнес"],
		stock: 23,
		brand: "Xiaomi",
		status: [{ text: "Hot", color: "#10B981" }],
		type: "Фитнес-браслет",
		featured: true,
	},
	{
		products: "Гаджеты",
		name: "Apple AirPods Pro 2",
		slug: "apple-airpods-pro-2",
		images: ["./Без названия (2).avif"],
		description:
			"Наушники с ANC, прозрачным режимом, пространственным аудио и чипом H2",
		price: 24990,
		discount: 15,
		categories: ["Гаджеты", "Аудио"],
		stock: 8,
		brand: "Apple",
		status: [{ text: "Sale", color: "#EF4444" }],
		type: "TWS наушники",
		featured: true,
	},
	{
		products: "Гаджеты",
		name: "Garmin Fenix 7X Solar",
		slug: "garmin-fenix-7x-solar",
		images: ["./фил.jpg"],
		description:
			"Премиум смарт-часы с солнечной зарядкой, GPS, VO2 Max и 28+ днями работы",
		price: 89990,
		discount: 0,
		categories: ["Гаджеты", "Спорт"],
		stock: 4,
		brand: "Garmin",
		status: [{ text: "New", color: "#3B82F6" }],
		type: "Смарт-часы",
		featured: false,
	},
]

const ProductGroup = () => {
	return (
		<div className="p-4 sm:p-6 lg:p-8 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center">
			{products.map((product) => (
				<ProductCard key={product.slug} {...product} />
			))}
		</div>
	)
}

export default ProductGroup
