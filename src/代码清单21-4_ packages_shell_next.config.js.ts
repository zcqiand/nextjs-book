// packages/shell/next.config.js
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          marketing: `marketing@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          dashboard: `dashboard@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        exposes: {
          './nav': './components/nav.tsx',
          './footer': './components/footer.tsx',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;