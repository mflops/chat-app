import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/conversations',
        permanent: true,
      },
    ];
  },

  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
