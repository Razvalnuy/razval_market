import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	// конфиг для изображений чтобы не ругались
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	experimental: {
		turbopackScopeHoisting: false,
	},
}

export default nextConfig
