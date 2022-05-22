const LK_SERVICE_ADDRESS = `http://${
  process.env.LK_SERVICE_ADDRESS || "localhost:3001"
}`;

/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/lk/:path*",
        destination: `${LK_SERVICE_ADDRESS}/:path*`, // Proxy to Backend
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
                cleanupIDs: false,
                removeTitle: false,
                convertShapeToPath: false,
                mergePaths: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },

  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
