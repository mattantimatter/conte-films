/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/drone',
        destination: '/solutions/real-estate#drone',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/#testimonials',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#solutions',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
