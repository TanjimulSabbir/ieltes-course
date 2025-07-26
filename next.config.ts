/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    importMap: {
      imports: {
        "@": "./",
        "@/components": "./components",
        "@/lib": "./lib",
        "@/hooks": "./hooks",
      },
    },
  },
  images: {
    domains: ["cdn.10minuteschool.com", "s3.ap-southeast-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
