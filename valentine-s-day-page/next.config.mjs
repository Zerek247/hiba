/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/hiba",
  assetPrefix: "/hiba/",

  images: {
    unoptimized: true
  },

  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
