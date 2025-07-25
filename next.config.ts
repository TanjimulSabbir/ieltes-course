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
};

module.exports = nextConfig;
