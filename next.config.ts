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
	transpilePackages: ["sanity"],
	swcMinify: true,
}

export default nextConfig
