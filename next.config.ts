import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
 
module.exports = withNextIntl(nextConfig);
