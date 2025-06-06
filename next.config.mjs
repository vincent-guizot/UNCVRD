/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/UNCVRD" : "",
  assetPrefix: isProd ? "/UNCVRD/" : "",
  images: {
    unoptimized: true, // ✅ Disable optimization for static export
  },
};

export default nextConfig;
