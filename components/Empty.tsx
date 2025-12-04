// Empty.tsx
import { motion } from "framer-motion"

const Empty = () => (
	<motion.div
		initial={{ opacity: 0, scale: 0.8 }}
		animate={{ opacity: 1, scale: 1 }}
		className="min-h-[400px] flex flex-col items-center justify-center py-12 text-center"
	>
		<div className="w-24 h-24 bg-slate-800/50 rounded-2xl flex items-center justify-center mb-6 border-2 border-slate-700">
			<span className="text-4xl">📦</span>
		</div>
		<h2 className="text-2xl font-bold text-white mb-4">Товаров пока нет</h2>
		<p className="text-slate-400 text-lg mb-8">
			Скоро здесь появятся крутые гаджеты
		</p>
	</motion.div>
)

export default Empty
