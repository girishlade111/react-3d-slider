/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/react-3d-slider',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
