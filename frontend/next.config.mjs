console.log('\n\n\n\n\n', process.env.SMART_PROXY)

const nextConfig = {
  reactStrictMode: false,
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.SMART_PROXY}/api/:path*`,
      }
    ]
  },

}

export default nextConfig
