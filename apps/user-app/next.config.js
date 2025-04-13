/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }

    config.module.rules.push({
      test: /\.html$/,
      use: 'ignore-loader'
    });

    return config;
  },
};
