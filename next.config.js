/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              removeViewBox: false,
              cleanupIDs: false,
              removeTitle: false,
              convertShapeToPath: false,
              mergePaths: false,
            },
          },
        },
      ],
    });

    return config;
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://front.skidka/api/:path*' // Proxy to Backend
  //     }
  //   ]
  // },

  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['front.skidka', 'new.skidka.ru'],
  },
};

module.exports = nextConfig;
