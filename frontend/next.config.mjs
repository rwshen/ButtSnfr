/** @type {import('next').NextConfig} */

export const API_URL = process.env.SMART_PROXY
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_URL}/:path*`,
			},
		]
	},
}

export default nextConfig
