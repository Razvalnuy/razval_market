import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	// конфиг для изображений чтобы не ругались
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
}

export default nextConfig
