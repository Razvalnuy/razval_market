"use client"
import { motion } from "framer-motion"

interface ErrorProps {
	message: string
	onRetry?: () => void
}

const Error = ({ message, onRetry }: ErrorProps) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		animate={{ opacity: 1, scale: 1 }}
		className="min-h-[400px] flex flex-col items-center justify-center py-12 text-center"
	>
		<div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-red-500/50">
			<span className="text-red-400 text-3xl">!</span>
		</div>
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="text-2xl font-bold text-white mb-4"
		>
			{message}
		</motion.h2>
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onRetry || (() => window.location.reload())}
			className="bg-linear-to-r from-[#00FF7F] to-[#00CC66] text-slate-900 px-8 py-3 rounded-xl font-bold text-lg shadow-2xl hover:shadow-[#00FF7F]/50 transition-all duration-300"
		>
			Попробовать снова
		</motion.button>
	</motion.div>
)

export default Error
