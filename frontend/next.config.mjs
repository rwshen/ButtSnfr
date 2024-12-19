const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.SMART_PROXY}/:path*`,
			},
		]
	},
}

export default nextConfig
