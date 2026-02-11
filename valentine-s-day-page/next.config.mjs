/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",

  basePath: isProd ? "/hiba" : "",
  assetPrefix: isProd ? "/hiba/" : "",

  images: {
    unoptimized: true
  },

  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
