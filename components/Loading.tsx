// Loading.tsx
import { motion } from "framer-motion"

const Loading = () => (
	<div className="min-h-[400px] flex flex-col items-center justify-center py-12">
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="w-12 h-12 border-4 border-[#00FF7F]/30 border-t-[#00FF7F] rounded-full animate-spin mb-6"
		/>
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="text-2xl font-bold text-white mb-2"
		>
			Загружаем крутые товары...
		</motion.h2>
		<motion.p
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
			className="text-slate-400 text-lg"
		>
			Подготовка эксклюзивных гаджетов
		</motion.p>
	</div>
)

export default Loading
