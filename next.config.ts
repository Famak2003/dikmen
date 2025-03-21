import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    // Ensure SVGR is used only on the client side
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
    }
    return config;
  },
  reactStrictMode: false,
};
 
module.exports = withNextIntl(nextConfig);
