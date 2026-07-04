/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Lokale Bilder aus /public werden von next/image automatisch zu WebP/AVIF
    // optimiert. Keine externen Bildquellen in V1 → keine remotePatterns nötig.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
