import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-o.suno.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.suno.ai',
      },
    ],
    qualities: [100, 75],
  },
  reactCompiler: true,
};

export default nextConfig;